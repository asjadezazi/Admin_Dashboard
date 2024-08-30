import { useState, useEffect } from "react";
import {
  // Stack,
  TextField,
  Button,
  Box,
  Paper,
  Link,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
  InputAdornment,
  IconButton,
  Toolbar,
  useMediaQuery,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "designation", label: "Designation", minWidth: 150 },
  { id: "qualification", label: "Qualification", minWidth: 200 },
  { id: "operations", label: "Operations", minWidth: 100 },
];

const TeacherList = () => {
  const [currentView, setCurrentView] = useState("list");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newTeacher, setNewTeacher] = useState({
    id: "",
    name: "",
    designation: "",
    qualification: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          searchQuery
            ? `http://localhost:4000/api/coaching/searchTeachers/${searchQuery}`
            : `http://localhost:4000/api/coaching/listTeacher?page=${
                page + 1
              }&limit=${rowsPerPage}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setRows(result.data || result);
        setTotal(result.total || result.length);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [page, rowsPerPage, searchQuery]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleTeacher = (event) => {
    const { name, value } = event.target;
    setNewTeacher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTeacherList = async (event) => {
    event.preventDefault();

    try {
      const url =
        currentView === "edit"
          ? `http://localhost:4000/api/coaching/updateTeacher/${newTeacher.id}`
          : "http://localhost:4000/api/coaching/createTeacher";
      const method = currentView === "edit" ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        body: JSON.stringify({
          name: newTeacher.name,
          designation: newTeacher.designation,
          qualification: newTeacher.qualification,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      console.log(
        currentView === "edit" ? "Teacher updated:" : "Teacher added:",
        result
      );

      setSnackbarMessage(
        currentView === "edit"
          ? "Teacher updated successfully!"
          : "Teacher added successfully!"
      );
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      if (currentView === "edit") {
        setRows(rows.map((row) => (row._id === result._id ? result : row)));
      } else {
        setRows([...rows, result.teacher]);
      }

      setNewTeacher({
        id: "",
        name: "",
        designation: "",
        qualification: "",
      });
      setCurrentView("list");
    } catch {
      setSnackbarMessage(
        currentView === "edit"
          ? "Error updating teacher. Please try again."
          : "Error adding teacher. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackCloseTeacher = () => {
    setSnackbarOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setNewTeacher({
      id: selectedRow._id,
      name: selectedRow.name,
      qualification: selectedRow.qualification,
      designation: selectedRow.designation,
    });
    setCurrentView("edit");
    handleMenuClose();
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleDelete = async () => {
    if (!selectedRow || !selectedRow._id) {
      console.log("No row selected or ID is undefined");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/coaching/deleteTeacher/${selectedRow._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      setRows(rows.filter((row) => row._id !== selectedRow._id));
      setSnackbarMessage("Teacher successfully deleted.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage("Error deleting teacher.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      handleMenuClose();
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "space-between",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: isSmallScreen ? 2 : 0,
            mt: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              component="button"
              variant="body1"
              underline="hover"
              onClick={() => setCurrentView("list")}
              sx={{
                cursor: "pointer",
                fontWeight: currentView === "list" ? "bold" : "normal",
                color: currentView === "list" ? "primary.main" : "text.primary",
              }}
            >
              Teacher List
            </Link>
            <Link
              component="button"
              variant="body1"
              underline="hover"
              onClick={() => setCurrentView("add")}
              sx={{
                cursor: "pointer",
                fontWeight: currentView === "add" ? "bold" : "normal",
                color: currentView === "add" ? "primary.main" : "text.primary",
              }}
            >
              Add Teacher
            </Link>
          </Box>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: ( 
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: isSmallScreen ? "100%" : "300px" }}
          />
        </Toolbar>

        {currentView === "list" && (
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              mt: 4,
              border: "1px solid",
              borderColor: theme.palette.divider,
              borderRadius: 1,
              padding: 2,
            }}
          >
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
                  {rows.map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align || "left"}
                          >
                            {column.id === "operations" ? (
                              <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={(event) => handleMenuClick(event, row)}
                              >
                                Option
                              </Button>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
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

        {currentView === "add" && (
          <Box
            component="form"
            onSubmit={handleTeacherList}
            sx={{
              mt: 4,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: "400px",
              border: "1px solid black",
              borderRadius: "4px",
              padding: 2,
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={newTeacher.name}
              onChange={handleTeacher}
              required
              fullWidth
            />
            <TextField
              label="Designation"
              name="designation"
              value={newTeacher.designation}
              onChange={handleTeacher}
              required
              fullWidth
            />
            <TextField
              label="Qualification"
              name="qualification"
              value={newTeacher.qualification}
              onChange={handleTeacher}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>
              {currentView === "edit" ? "Update Teacher" : "Add Teacher"}
            </Button>
          </Box>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackCloseTeacher}
        >
          <Alert
            onClose={handleSnackCloseTeacher}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEdit}>
            <EditIcon /> Edit
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <DeleteIcon /> Delete
          </MenuItem>
        </Menu>
      </Box>
    </Container>
  );
};

export default TeacherList;
