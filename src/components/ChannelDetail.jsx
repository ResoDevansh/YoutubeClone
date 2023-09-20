import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`/channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelDetail(data[0])
    );
    fetchFromApi(`/search?part=snippet,id&channelId=${id}`).then((data) =>
      setVideos(data)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,40,1) 38%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      ></div>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
