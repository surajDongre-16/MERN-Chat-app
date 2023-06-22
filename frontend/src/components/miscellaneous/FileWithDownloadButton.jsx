import React from "react";
import { Box, Image, IconButton, Tooltip } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { downloadMedia } from "../../config/ChatLogics";

const imageFileType = ["image/jpeg", "image/png", "image/jpg"];

const FileWithDownloadButton = ({ fileUrl, fileName, fileType }) => {
  return (
    <Box position="relative" display="inline-block">
      {imageFileType.includes(fileType) ? (
        <Image
          style={{ width: 250, height: "100%", objectFit: "cover" }}
          src={fileUrl}
          alt={fileName}
        />
      ) : (
        <Image
          style={{ width: 150, height: "100%", objectFit: "cover" }}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
          }
          alt={fileName}
        />
      )}
      <Tooltip label="Download" aria-label="Download">
        <IconButton
          aria-label="Download"
          icon={<DownloadIcon color={"blackAlpha.900"} />}
          colorScheme="teal"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity={0}
          transition="opacity 0.3s ease"
          _hover={{ opacity: 0.2 }}
          onClick={(e) => downloadMedia(e, fileUrl)}
        />
      </Tooltip>
    </Box>
  );
};

export default FileWithDownloadButton;
