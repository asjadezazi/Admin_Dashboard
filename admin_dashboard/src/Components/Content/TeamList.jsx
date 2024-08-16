import { useState } from "react";
import {
    Stack,
    TextField,
    Button,
    Box,
    Avatar,
    Paper,
    Link,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import rows from "./data1";

const columns = [
    { id: "name", label: "Name", minWidth: 150 },
    { id: "background", label: "Background", minWidth: 150 },
    { id: "designation", label: "Designation", minWidth: 150 },
    {
        id: "image",
        label: "Image",
        minWidth: 100,
        renderCell: (value) => (
            <Avatar alt="Profile" src={value || "https://via.placeholder.com/150"} />
        ),
    },
];

const TeamList = () => {
    const [currentView, setCurrentView] = useState("list");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
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
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align || "left"}
                                                    >
                                                        {column.renderCell
                                                            ? column.renderCell(value)
                                                            : value}
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
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            )}

            {currentView === "add" && (
                <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
                    <Box
                        p={4}
                        width="400px"
                        border="2px solid rgba(0, 0, 0, 0.12)"
                        borderRadius="8px"
                    >
                        <Stack spacing={2}>
                            <TextField label="Name" variant="outlined" fullWidth />
                            <TextField label="Background" variant="outlined" fullWidth />
                            <TextField label="Designation" variant="outlined" fullWidth />
                            <Button variant="contained" component="label">
                                Upload Photo
                                <input type="file" hidden />
                            </Button>
                            <Button variant="contained" color="secondary" fullWidth>
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default TeamList;
