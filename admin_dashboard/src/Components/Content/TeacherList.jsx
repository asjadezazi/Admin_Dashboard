import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Avatar, Box, Tabs, Tab } from "@mui/material";
import Paper from "@mui/material/Paper";
import rows from "./data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
    { id: "name", label: "Name", minWidth: 150 },
    { id: "designation", label: "Designation", minWidth: 150 },
    { id: "qualification", label: "Qualification", minWidth: 200 },
    {
        id: "image",
        label: "Image",
        minWidth: 100,
        // align: "center",
        renderCell: (value) => (
            <Avatar alt="Profile" src={value || "https://via.placeholder.com/150"} />
        ),
    },
];

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    // eslint-disable-next-line react/prop-types
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
        </div>
    );
}

const TeacherList = () => {
    const [value, setValue] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="tabs for teacher management"
            >
                <Tab label="Add Teacher" {...a11yProps(0)} />
                <Tab label="Teacher List" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Stack direction="row" spacing={2} mb={2}>
                    <Link to="/add-teacher" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="primary">
                            Add Teacher
                        </Button>
                    </Link>
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
            </TabPanel>
        </Box>
    );
};

export default TeacherList;
