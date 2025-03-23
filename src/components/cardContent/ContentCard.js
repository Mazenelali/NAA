import React, { useState } from "react";
import styles from "./ContentCard.module.css";

function ContentCard ({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const getFileIcon = (mimeType) => {
    if (mimeType.includes("pdf")) {
      return (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2h9l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <text x="7" y="17" fontSize="8" fill="#fff">PDF</text>
        </svg>
      );
    }
    if (mimeType.includes("presentation")) {
      return (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <text x="7" y="17" fontSize="8" fill="#fff">PPT</text>
        </svg>
      );
    }
    if (mimeType.includes("word")) {
      return (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <text x="7" y="17" fontSize="8" fill="#fff">DOC</text>
        </svg>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {files.map((file) => (
        <div
          key={file.id}
          className={styles.card}
          onClick={() => setSelectedFile(file)}
        >
          {getFileIcon(file.mimeType)}
          <p className={styles.fileName}>{file.name}</p>
        </div>
      ))}

      {selectedFile && (
        <div className={styles.modal}>
          <button className={styles.backButton} onClick={() => setSelectedFile(null)}> الرجوع ←</button>
          <iframe
            src={selectedFile.displayLink+"#toolbar=0"}
            title={selectedFile.name}
            className={styles.viewer}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
