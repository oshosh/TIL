{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "http://...",
      data: "byte-data...",
    };
  }

  // 원하는것만 제외하여 뽑자...
  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
