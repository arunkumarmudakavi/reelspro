"use client"

import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useEffect, useState } from "react";

export default function Home() {

  const [videos, setVideos] = useState<IVideo[]>([])

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const data = await apiClient.getVideos();
  //       setVideos(data)
  //     } catch (error) {
  //       console.error("Error while fetching videos")
  //     }
  //   }
  //   fetchVideos();
  // }, [])

  return (
    <div>
      Hey GEEK
    </div>
  );
}
