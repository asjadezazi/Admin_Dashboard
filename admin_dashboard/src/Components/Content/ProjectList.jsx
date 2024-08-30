import { useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Box,
  Paper,
  Link,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "title", label: "Title", minWidth: 150 },
  { id: "description", label: "Description", minWidth: 150 },
  { id: "operations", label: "Operations", minWidth: 100 },

  // Uncomment and update if using image column
  // {
  //   id: "image",
  //   label: "Image",
  //   minWidth: 100,
  //   renderCell: (value) => (
  //     <Avatar alt="Profile" src={value || "https://via.placeholder.com/150"} />
  //   ),
  // },
];

const ProjectList = () => {
  const [currentView, setCurrentView] = useState("list");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/ITservices/listProject?page=${
            page + 1
          }&limit=${rowsPerPage}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status:${response.status}`);
        const result = await response.json();
        setRows(result.data);
        setTotal(result.total);
      } catch (error) {
        console.log("Error fetching project list:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleProject = (event) => {
    const { name, value } = event.target;
    setNewProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProjectList = async (event) => {
    event.preventDefault();

    try {
      const url =
        currentView === "edit"
          ? `http://localhost:4000/api/ITservices/updateProject/${newProject.id}`
          : "http://localhost:4000/api/ITservices/createProject";
      const method = currentView === "edit" ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        body: JSON.stringify({
          title: newProject.title,
          description: newProject.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      setSnackbarMessage(
        currentView === "edit"
          ? "Project updated successfully!"
          : "Project added successfully!"
      );
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      if (currentView === "edit") {
        setRows(rows.map((row) => (row._id === result._id ? result : row)));
      } else {
        setRows([...rows, result.project]);
      }

      setNewProject({
        id: "",
        title: "",
        description: "",
      });
      setCurrentView("list");
    } catch (error) {
      console.error("Error processing project:", error);
      setSnackbarMessage(
        currentView === "edit"
          ? "Error updating project. Please try again."
          : "Error adding project. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    if (selectedRow) {
      setNewProject({
        id: selectedRow._id,
        title: selectedRow.title,
        description: selectedRow.description,
      });
      setCurrentView("edit");
    }
    handleMenuClose();
  };
  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleDelete = async () => {
    if (!selectedRow || !selectedRow._id) {
      console.log("No row selected or ID is undefined"); // Debugging info
      return;
    }

    try {
      console.log(`Deleting row with ID: ${selectedRow._id}`); // Debugging info
      const response = await fetch(
        `http://localhost:4000/api/ITservices/deleteProject/${selectedRow._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the deleted row from the table
      setRows(rows.filter((row) => row._id !== selectedRow._id));
      setSnackbarMessage("Project  successfully deleted.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage("Error deleting Project List.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      handleMenuClose();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => setCurrentView("list")}
          sx={{
            cursor: "pointer",
            fontWeight: currentView === "list" ? "bold" : "normal",
          }}
        >
          Project List
        </Link>
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => setCurrentView("add")}
          sx={{
            cursor: "pointer",
            fontWeight: currentView === "add" ? "bold" : "normal",
          }}
        >
          Add Project
        </Link>
      </Box>

      {currentView === "list" && (
        <Paper sx={{ width: "96%", overflow: "hidden", ml: 2, mt: 4 }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align || "left"}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (
                  rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id || index}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "operations") {
                            return (
                              <TableCell key={column.id} align="center">
                                <Button
                                  variant="contained"
                                  onClick={(event) =>
                                    handleMenuClick(event, row)
                                  }
                                >
                                  Options
                                </Button>
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={handleMenuClose}
                                >
                                  <MenuItem onClick={handleEdit}>
                                    <EditIcon sx={{ mr: 1 }} /> Edit
                                  </MenuItem>
                                  <MenuItem onClick={handleDelete}>
                                    <DeleteIcon sx={{ mr: 1 }} /> Delete
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {(currentView === "add" || currentView === "edit") && (
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box
            p={4}
            width="400px"
            border="2px solid rgba(0, 0, 0, 0.12)"
            borderRadius="8px"
          >
            <form onSubmit={handleProjectList}>
              <Stack spacing={2}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  value={newProject.title}
                  onChange={handleProject}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={newProject.description}
                  onChange={handleProject}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  {currentView === "edit" ? "Update" : "Submit"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default ProjectList;
