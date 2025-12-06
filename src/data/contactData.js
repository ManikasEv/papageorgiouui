export const contactData = {
  title: "Get a Free Quote",
  subtitle: "Let's discuss your tile grouting project",
  formFields: [
    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+49 123 456 7890", required: true },
    { name: "projectType", label: "Project Type", type: "select", options: ["Kitchen", "Bathroom", "Floor", "Commercial", "Other"], required: true },
    { name: "message", label: "Project Details", type: "textarea", placeholder: "Tell me about your tiling project (area size, tile type, timeline, etc.)...", required: true }
  ],
  submitButtonText: "Request Free Quote",
  mapCoordinates: {
    lat: 47.5,
    lng: 8.7244,
    zoom: 13
  },
  mapAddress: "Winterthur, Switzerland"
};

