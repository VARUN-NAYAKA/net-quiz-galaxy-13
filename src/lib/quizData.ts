
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const networkingQuizQuestions: Question[] = [
  {
    id: 1,
    question: "Which protocol operates at the Transport layer of the OSI model?",
    options: ["HTTP", "TCP", "IP", "Ethernet"],
    correctAnswer: 1,
    explanation: "TCP (Transmission Control Protocol) operates at the Transport layer (Layer 4) of the OSI model, providing reliable, connection-oriented data delivery."
  },
  {
    id: 2,
    question: "What is the primary function of a router in a network?",
    options: [
      "Convert digital to analog signals", 
      "Connect multiple networks and forward packets between them", 
      "Amplify network signals", 
      "Provide wireless access points"
    ],
    correctAnswer: 1,
    explanation: "Routers connect multiple networks and forward data packets between them based on network layer information."
  },
  {
    id: 3,
    question: "Which of the following is NOT a private IP address range?",
    options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "209.0.0.0/8"],
    correctAnswer: 3,
    explanation: "209.0.0.0/8 is a public IP address range. The private IP ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."
  },
  {
    id: 4,
    question: "What is the purpose of DNS in networking?",
    options: [
      "Encrypting data packets", 
      "Translating domain names to IP addresses", 
      "Filtering network traffic", 
      "Managing bandwidth allocation"
    ],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) translates human-readable domain names (like example.com) into machine-readable IP addresses."
  },
  {
    id: 5,
    question: "What protocol is commonly used for secure web browsing?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    correctAnswer: 2,
    explanation: "HTTPS (HTTP Secure) is used for secure web browsing, encrypting data between the web server and the browser."
  }
];
