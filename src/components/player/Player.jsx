import React, { useState } from 'react'

import PauseRounded from '@mui/icons-material/PauseRounded';

import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';

import FastForwardRounded from '@mui/icons-material/FastForwardRounded';

import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';

import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

import { Stack, Slider, Box } from '@mui/material';


import './player.scss'

const Player = () => {
	const [play,setPlay]=useState(false);
	const [volume,setVolume]=useState(50);
    return (
        <div className="player relative">
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                marginTop="10px"
            >
                <FastRewindRounded className="btn-controler" />
                {play ? (
                    <PauseRounded
                        onClick={() => setPlay(!play)}
                        className="btn-controler"
                        fontSize="large"
                    />
                ) : (
                    <PlayArrowRounded
                        onClick={() => setPlay(!play)}
                        className="btn-controler "
                    />
                )}
                <FastForwardRounded className="btn-controler" />
            </Stack>

            <Stack
                mt="10px"
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                width="100%"
                height="100%"
            >
                <VolumeDownRounded cursor="pointer" onClick={() => setVolume(0)} />
                <Slider
                    aria-label="Volume"
                    size="small"
                    sx={{
                        color: "green",
                        "& .MuiSlider-track": {
                            border: "none",
                        },
                        "& .MuiSlider-thumb": {
                            width: 24,
                            height: 24,
                            backgroundColor: "#fff",
                            "&:before": {
                                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                            },
                            "&:hover, &.Mui-focusVisible, &.Mui-active": {
                                boxShadow: "none",
                            },
                        },
                    }}
                    valueLabelDisplay="auto"
                    value={volume}
                    onChange={(e) => {
                        setVolume(e.target.value);
                    }}
                />
                <VolumeUpRounded cursor="pointer" onClick={() => setVolume((prev)=>prev+5)} />
            </Stack>
			<Box className="flex justify-center items-center max-h-24 " sx={{ height: '80px', flexShrink: 0 }}>
					{
						new Array(22).fill(1).map((item,index) => {
							return <Box key={index} mx={0.5} className={`music-stroke ${play?'music-play':''}`} style={{animationDelay:`0.${index*Math.floor(10*Math.random())}s`}} ></Box>
						})
					}
			</Box>
        </div>
    );
};

export default Player
