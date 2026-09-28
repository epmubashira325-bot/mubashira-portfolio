// Content comes from the resume. Add an `images` array to any project to use
// your own screenshots (files in public/projects/). Projects without `images`
// keep showing the placeholder photos.
export const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Analyzer",
    description:
      "A full-stack web app that evaluates resumes against job descriptions. It predicts ATS scores, finds skill gaps and generates automated feedback for improvement.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "TF-IDF", "NLTK"],
    link: "#",
    // images: ["/projects/resume-analyzer-1.jpg", "/projects/resume-analyzer-2.jpg"],
  },
  {
    id: 2,
    title: "Embedded AI Autonomous Driving Assistant",
    description:
      "An autonomous driving assistant on Raspberry Pi 4 that combines camera and ultrasonic sensor data for real-time object detection, traffic sign recognition and obstacle avoidance. It also adjusts speed in rain and reroutes based on live conditions.",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLOv8", "Raspberry Pi 4"],
    link: "#",
    // images: ["/projects/autonomous-vehicle-1.jpg", "/projects/autonomous-vehicle-2.jpg"],
  },
  {
    id: 3,
    title: "AI-Based Nutrition & Health Analyzer",
    description:
      "A full-stack web application for ingredient analysis and nutritional assessment. Its recommendation system predicts health scores with 90% accuracy, flags potential health risks and generates nutritional insights from food data.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Full-Stack"],
    link: "#",
    // images: ["/projects/nutrition-analyzer-1.jpg", "/projects/nutrition-analyzer-2.jpg"],
  },
  {
    id: 4,
    title: "Real-Time Facial Emotion Recognition",
    description:
      "A live webcam pipeline that detects faces and classifies multiple emotions in real time, using pretrained CNN models for fast inference.",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
    link: "#",
    // images: ["/projects/emotion-recognition-1.jpg", "/projects/emotion-recognition-2.jpg"],
  },
  {
    id: 5,
    title: "Mini AI Chatbot",
    description:
      "A generative AI chat app running the Llama 3.2 model locally. Prompt engineering keeps responses accurate, and an interactive web interface delivers them in real time.",
    technologies: ["Python", "Streamlit", "Ollama", "Llama 3.2"],
    link: "#",
    // images: ["/projects/ai-chatbot-1.jpg", "/projects/ai-chatbot-2.jpg"],
  },
];