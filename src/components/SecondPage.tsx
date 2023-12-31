import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DepartmentList from "./DepartmentList";
import { Typography } from "@mui/material";

function SecondPage() {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: Post[] = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "userId", headerName: "UserID", width: 120 },
    { field: "title", headerName: "Title", width: 500 },
    { field: "body", headerName: "Body", width: 700 },
  ];

  return (
    <>
      <div style={{ height: 500, width: "80%", margin: "20px auto" }}>
      <Typography variant="h4" style={{ marginBottom: "16px", color: "#333" }}>
          Posts
        </Typography>
        <DataGrid rows={posts} columns={columns} />
      </div>
      <div style={{ width:"80%",margin:"8rem auto",fontSize:"1.5rem" }}>
        <DepartmentList />
      </div>
    </>
  );
}

export default SecondPage;
