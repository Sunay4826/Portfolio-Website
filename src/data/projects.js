// Local projects data. Add or edit entries freely.
// Images should go to /public/projects and be referenced as "/projects/<file>".

export const projects = [
  {
    id: "todo-app",
    Title: "ToDo App (with AI integration)",
    Description:
      "Create, view, and mark todos as done. Integrated AI helper to enhance productivity.",
    Img: "/projects/todo-app.png", // place image at public/projects/todo-app.png
    Link: "https://github.com/Sunay4826/ToDoApp.git",
    TechStack: ["React", "Node", "Express", "CSS"],
  },
  {
    id: "advanced-pipify",
    Title: "Advanced PiPify - Professional Picture-in-Picture Tool",
    Description:
      "Modern multi-window PiP with screen/window/tab/camera capture, themes, settings, and hotkeys.",
    Img: "/projects/pipify.png", // place image at public/projects/pipify.png
    Link: "https://sunay4826.github.io/pipify_tool-main/",
    TechStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "movie-recommendation-system",
    Title: "Movie Recommendation System",
    Description:
      "Streamlit app offering content-based and collaborative filtering recommendations without external APIs.",
    Img: "/projects/mrs.png", // place image at public/projects/mrs.png
    Link: "https://movie-recommendation-system86.streamlit.app/",
    TechStack: ["Python", "Streamlit"],
  },
];

export default projects;

