import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center'
})

const UserBox = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})
 

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" sx={{position: 'fixed', bottom: 20, left:{xs: "calc(50%) - 25px", md: 30} }}
      onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab> 
      </Tooltip>
      
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar 
             alt="Remy Sharp" 
             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
             sx={{width: 30, height: 30}}
            />
            <Typography fontWeight={500} variant="span" >Ivan Kovacevic</Typography>
          </UserBox>
          <TextField
            sx= {{width: '100%'}}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
           />
          <Stack direction="row" gap={1} mt={2} mb={3}>
             <EmojiEmotionsIcon color="primary"/>
             <ImageIcon color="secondary"/>
             <VideoCameraBackIcon color="success"/>
             <PersonAddIcon color="error"/>
          </Stack> 
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width: '100px'}} ><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
