import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91 ");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email || !phoneNumber) {
      alert("Please fill all the fields");
      return;
    }
    const userDetails = {
      name,
      email,
      phoneNumber,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log("Details saved:", userDetails);
    navigate('/second');
  };
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="800px" display="flex" flexDirection="column" gap={3}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit}>
          Save and Continue
        </Button>
      </Box>
    </Box>
  );
}
