import React, { useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Checkbox, Typography } from "@mui/material";

interface SubDepartment {
  name: string;
  selected: boolean;
}

interface Department {
  department: string;
  sub_departments: SubDepartment[];
  expanded?: boolean;
  selected?: boolean;
}

const secondComponentData: Department[] = [
  {
    department: "Customer_service",
    sub_departments: [
      { name: "support", selected: false },
      { name: "customer_success", selected: false },
    ],
    expanded: false,
  },
  {
    department: "Design",
    sub_departments: [
      { name: "graphic_design", selected: false },
      { name: "product_design", selected: false },
      { name: "web_design", selected: false },
    ],
    expanded: false,
  },
  {
    department: "Agriculture & Fishing",
    sub_departments: [
      { name: "Agriculture", selected: false },
      { name: "Crops", selected: false },
      { name: "Farming Animals & LiveStock", selected: false },
      { name: "Fishery & Aquaculture", selected: false },
      { name: "Ranching", selected: false },
    ],
    expanded: false,
  },
  {
    department: "Business Services",
    sub_departments: [
      { name: "Consulting", selected: false },
      { name: "Marketing", selected: false },
      { name: "Human Resources", selected: false },
      { name: "Project Management", selected: false },
      { name: "Financial Services", selected: false },
      { name: "Accounting", selected: false },
      { name: "Legal Services", selected: false },
      { name: "Market Research", selected: false },
      { name: "Public Relations", selected: false },
      { name: "Sales", selected: false },
      { name: "Training & Development", selected: false },
      { name: "Supply Chain Management", selected: false },
      { name: "Business Analysis", selected: false },
      { name: "Information Technology", selected: false },
      { name: "Risk Management", selected: false },
      { name: "Quality Assurance", selected: false },
      { name: "Procurement", selected: false },
      { name: "Operations Management", selected: false },
      { name: "Customer Relations", selected: false },
      { name: "Data Analytics", selected: false },
      { name: "Business Intelligence", selected: false },
      { name: "E-commerce", selected: false },
      { name: "Logistics", selected: false },
      { name: "Facilities Management", selected: false },
      { name: "Strategic Planning", selected: false },
    ],
    expanded: false,
  },
];

function DepartmentList() {
  const [departments, setDepartments] =
    useState<Department[]>(secondComponentData);

  const handleSelect = (dept: Department, subDept: SubDepartment) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((d) =>
        d.department === dept.department
          ? {
              ...d,
              sub_departments: d.sub_departments.map((sub) =>
                sub === subDept ? { ...sub, selected: !sub.selected } : sub
              ),
            }
          : d
      )
    );
  };

  const handleDepartmentSelect = (dept: Department) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((d) => ({
        ...d,
        selected: d.department === dept.department ? !d.selected : d.selected,
        sub_departments:
          d.department === dept.department
            ? d.sub_departments.map((sub) => ({
                ...sub,
                selected: !d.selected,
              }))
            : d.sub_departments,
      }))
    );
  };
  return (
    <Box p={2}>
      <Typography variant="h4" style={{ color: "#333", marginBottom: "16px" }}>
        Departments and Sub-Departments
      </Typography>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ border: "1px solid #ccc", borderRadius: "4px", p: 2 }}
      >
        {departments.map((dept) => {
          const allSubDeptsSelected = dept.sub_departments.every(
            (subDept) => subDept.selected
          );
          return (
            <TreeItem
              key={dept.department}
              nodeId={dept.department}
              label={
                <Box display="flex" alignItems="center">
                  <Checkbox
                    color="primary"
                    checked={allSubDeptsSelected}
                    onChange={() => handleDepartmentSelect(dept)}
                  />
                  <Typography
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontWeight: 500,
                      color: "#222",
                    }}
                  >
                    {dept.department}
                  </Typography>
                </Box>
              }
              sx={{
                "& .MuiTreeItem-content": {
                  borderBottom: "1px solid #ccc",
                  borderRadius: "4px",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              {dept.sub_departments.length > 0 &&
                dept.sub_departments.map((subDept, index) => (
                  <TreeItem
                    key={`${dept.department}-${subDept.name}-${index}`}
                    nodeId={`${dept.department}-${subDept.name}-${index}`}
                    label={
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          color="primary"
                          checked={subDept.selected}
                          onChange={() => handleSelect(dept, subDept)}
                        />
                        <Typography
                          variant="body2"
                          style={{ marginLeft: "8px", color: "#555" }}
                        >
                          {subDept.name}
                        </Typography>
                      </Box>
                    }
                    sx={{
                      "& .MuiTreeItem-content": {
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                  />
                ))}
            </TreeItem>
          );
        })}
      </TreeView>
    </Box>
  );
}

export default DepartmentList;
