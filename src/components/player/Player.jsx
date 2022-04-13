import { Box, Slider, Stack } from '@mui/material'

import React from 'react'

import './player.scss'

import VolumeDown from '@mui/icons-material/VolumeDown';

import VolumeUp from '@mui/icons-material/VolumeUp';

const Player = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className="player">
        <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
    </div>
  )
}

export default Player