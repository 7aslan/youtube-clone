import { VideoCard, ChannelCard } from "./";
import { Stack, Box } from "@mui/material";
const Videos = ({ videos }) => {
  console.log(videos,"videoId")
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,index) => (
        <Box key={index}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.snippet?.videoID && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
