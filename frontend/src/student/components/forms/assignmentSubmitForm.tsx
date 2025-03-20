

import { useState, useEffect } from "react";
import API from "frontend/src/service/Axios";

interface AssignmentSubmit {
  _id: string;
  filename: string;
  // Add other properties if needed
}

const AssignmentSubmitForm = () => {
  const [files, setFiles] = useState<AssignmentSubmit[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [AssignmentSubmitFile, setAssignmentSubmitFile] = useState<AssignmentSubmit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch PDF files
  useEffect(() => {
    API.get("/assignmentSubmit")
    .then((response) => {
      console.log(response.data); // Log the response data
      // Check if the response.data contains a 'data' property with courses
      if (response.data && Array.isArray(response.data.data)) {
        setAssignmentSubmitFile(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setError("Unexpected data format received.");
        setAssignmentSubmitFile([]); // Fallback to empty array
        
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
      setError("Failed to load courses.");
      setAssignmentSubmitFile([]); // Prevent map error
      setLoading(false);
    });
}, []);

  const fetchFiles = async () => {
    try {
      const response = await API.get("/assignmentSubmit");
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Upload PDF
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await API.post("/assignmentSubmit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
      setSelectedFile(null);
      fetchFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleDownload = async (id: string) => {
    // window.open(`http://localhost:5000/api/lecturematerials/download/${id}`);
    window.open(API.defaults.baseURL + `/assignmentSubmit/download/${id}`);
  };

  // const handleDelete = async (id: string) => {
  //   try {
  //     await API.delete(`http://localhost:5000/api/lecturematerials/${id}`);
  //     alert("File deleted successfully!");
  //     fetchFiles();
  //   } catch (error) {
  //     console.error("Error deleting file:", error);
  //   }
  // };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Submit Your Assignment</h2>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="mb-4">
        <input
          type="file"
          onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
          Upload
        </button>
      </form>

      {/* File List */}
      <ul className="space-y-2">
        {files.map((file) => (
          <li key={file._id} className="flex justify-between bg-gray-100 p-3 rounded">
            <span>{file.filename}</span>
            <div>
              <button onClick={() => handleDownload(file._id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                Download
              </button>
              {/* <button onClick={() => handleDelete(file._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentSubmitForm;
