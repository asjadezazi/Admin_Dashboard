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
  InputAdornment,
  IconButton,
  Toolbar,
  useMediaQuery,
  Container,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const columns = [
  { id: "title", label: "Title", minWidth: 150 },
  { id: "description", label: "Description", minWidth: 150 },
  { id: "operation", label: "Operation", minWidth: 100 },
];

const CourseList = () => {
  const [currentView, setCurrentView] = useState("list");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newCourse, setNewCourse] = useState({
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

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          searchQuery
            ? `http://localhost:4000/api/coaching/searchCourses/${searchQuery}`
            : `http://localhost:4000/api/coaching/listCourse?page=${
                page + 1
              }&limit=${rowsPerPage}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setRows(result.data || result);
        setTotal(result.total || result.length);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [page, rowsPerPage, searchQuery]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCourse = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevState) => ({
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
      console.log(
        currentView === "edit" ? "Course updated:" : "Course added:",
        result
      );

      setSnackbarMessage(
        currentView === "edit"
          ? "Course updated successfully!"
          : "Course added successfully!"
      );
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      if (currentView === "edit") {
        setRows(rows.map((row) => (row._id === result._id ? result : row)));
      } else {
        setRows([...rows, result.course]);
      }

      setNewCourse({
        id: "",
        title: "",
        description: "",
      });
      setCurrentView("list");
    } catch {
      setSnackbarMessage(
        currentView === "edit"
          ? "Error updating course. Please try again."
          : "Error adding course. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackCloseCourse = () => {
    setSnackbarOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setNewCourse({
      id: selectedRow._id,
      title: selectedRow.title,
      description: selectedRow.description,
    });
    setCurrentView("edit");
    handleMenuClose();
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleDeleteforCourse = async () => {
    if (!selectedRow || !selectedRow._id) {
      console.log("No row selected or ID is undefined");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/coaching/deleteCourse/${selectedRow._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      setRows(rows.filter((row) => row._id !== selectedRow._id));
      setSnackbarMessage("Course successfully deleted.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage("Error deleting course.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      handleMenuClose();
    }
  };

  const handleSearchforCourse = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to first page on search
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
            onChange={handleSearchforCourse}
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
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-controls="course-menu"
                          aria-haspopup="true"
                          onClick={(event) => handleMenuClick(event, row)}
                        >
                          <EditIcon />
                        </IconButton>
                        <Menu
                          id="course-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleEdit}>Edit</MenuItem>
                          <MenuItem onClick={handleDeleteforCourse}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
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
          <Paper
            sx={{
              width: "100%",
              mt: 4,
              border: "1px solid",
              borderColor: theme.palette.divider,
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Stack
              spacing={2}
              component="form"
              onSubmit={handleCourseList}
              sx={{ width: "100%" }}
            >
              <TextField
                label="Course Title"
                name="title"
                value={newCourse.title}
                onChange={handleCourse}
                required
                fullWidth
              />
              <TextField
                label="Description"
                name="description"
                value={newCourse.description}
                onChange={handleCourse}
                required
                multiline
                rows={4}
                fullWidth
              />
              <Button type="submit" variant="contained">
                {currentView === "edit" ? "Update Course" : "Add Course"}
              </Button>
            </Stack>
          </Paper>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackCloseCourse}
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
    </Container>
  );
};

export default CourseList;
