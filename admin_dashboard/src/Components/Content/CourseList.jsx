import { useState, useEffect, useCallback } from "react";
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
  InputAdornment,
  IconButton,
  useMediaQuery,
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
  { id: "title", label: "Title", minWidth: 150 },
  { id: "description", label: "Description", minWidth: 150 },
 
  { id: "operations", label: "Operations", minWidth: 100 },
];

const CourseList = () => {
  const [currentView, setCurrentView] = useState("list");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newCourse, setNewCourseList] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Refactored fetchTeachers using useCallback
  const fetchCourse = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        searchQuery
          ? `http://localhost:4000/api/coaching/searchCourses/${encodeURIComponent(
              searchQuery
            )}`
          : `http://localhost:4000/api/coaching/listCourse?page=${
              page + 1
            }&limit=${rowsPerPage}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      console.log("Fetched result:", result); // Debug log
      setRows(result.data || result);
      setTotal(result.total || (result.data ? result.data.length : 0));
    } catch (error) {
      console.error("Error fetching course data:", error);
      setSnackbarMessage("Failed to fetch course. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage, searchQuery]);

  // Initial fetch and on dependencies change
  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCourse = (event) => {
    const { name, value } = event.target;
    setNewCourseList((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCourseList = async (event) => {
    event.preventDefault();

    try {
      const url =
        currentView === "edit"
          ? `http://localhost:4000/api/coaching/updateCourse/${newCourse.id}`
          : "http://localhost:4000/api/coaching/createCourse";
      const method = currentView === "edit" ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        body: JSON.stringify({
          title: newCourse.title,
          description: newCourse.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      console.log("Teacher operation result:", result);

      setSnackbarMessage(
        currentView === "edit"
          ? "Course updated successfully!"
          : "Course added successfully!"
      );
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Refetch the teachers to get the updated list
      // Optionally, you can optimize by updating the state manually as you did before
      await fetchCourse();

      setNewCourseList({
        id: "",
        title: "",
        description: "",
      });
      setCurrentView("list");
    } catch (error) {
      console.error("Error processing course:", error);

      setSnackbarMessage(
        currentView === "edit"
          ? "Error updating course. Please try again."
          : "Error adding course. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackCloseCourse = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    if (selectedRow) {
      setNewCourseList({
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

  const handleDeleteCourseList = async () => {
    if (!selectedRow || !selectedRow._id) {
      console.log("No row selected or ID is undefined");
      return;
    }

    try {
      console.log(`Deleting row with ID: ${selectedRow._id}`); // Debugging info
      const response = await fetch(
        `http://localhost:4000/api/coaching/deleteCourse/${selectedRow._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      setSnackbarMessage("Course successfully deleted.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Refetch the course to get the updated list
      await fetchCourse();
    } catch (error) {
      console.error("Error deleting course:", error);
      setSnackbarMessage("Error deleting course.");
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
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: isSmallScreen ? "center" : "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? 2 : 0,
          mt: 2,
          mb: 2,
        }}
      >
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
          Course List
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
          Add Course
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

      {currentView === "list" && (
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            mt: 4,
            border: "1px solid",
            borderColor: theme.palette.divider,
            borderRadius: 1,
            padding: isSmallScreen ? 2 : 4,
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
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : rows.length > 0 ? (
                  rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id || row._id || index}
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
                                  open={
                                    Boolean(anchorEl) &&
                                    selectedRow?._id === row._id
                                  }
                                  onClose={handleMenuClose}
                                >
                                  <MenuItem onClick={handleEdit}>
                                    <EditIcon sx={{ mr: 1 }} /> Edit
                                  </MenuItem>
                                  <MenuItem onClick={handleDeleteCourseList}>
                                    <DeleteIcon sx={{ mr: 1 }} /> Delete
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value !== undefined && value !== null
                                ? value
                                : "N/A"}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No Course found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 35]}
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
            <form onSubmit={handleCourseList}>
              <Stack spacing={2}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  name="title"
                  value={newCourse.title}
                  onChange={handleCourse}
                  required
                />

                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={newCourse.description}
                  onChange={handleCourse}
                  required
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
        onClose={handleSnackCloseCourse}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackCloseCourse}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CourseList;
