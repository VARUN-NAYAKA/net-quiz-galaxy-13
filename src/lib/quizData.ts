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
  },
  {
    id: 6,
    question: "What is the purpose of DHCP in networking?",
    options: [
      "To secure network traffic",
      "To automatically assign IP addresses to devices",
      "To route packets between networks",
      "To manage network bandwidth"
    ],
    correctAnswer: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration to devices on a network."
  },
  {
    id: 7,
    question: "Which OSI layer is responsible for data encryption?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Presentation Layer",
      "Application Layer"
    ],
    correctAnswer: 2,
    explanation: "The Presentation Layer (Layer 6) handles data encryption, compression, and format conversion."
  },
  {
    id: 8,
    question: "What is a MAC address used for?",
    options: [
      "To identify network devices uniquely at the hardware level",
      "To determine the fastest network route",
      "To encrypt network traffic",
      "To compress data packets"
    ],
    correctAnswer: 0,
    explanation: "A MAC (Media Access Control) address is a unique hardware identifier assigned to network interfaces."
  },
  {
    id: 9,
    question: "What is the maximum size of an IPv4 address?",
    options: [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    correctAnswer: 0,
    explanation: "An IPv4 address is 32 bits long, typically written as four octets in decimal format."
  },
  {
    id: 10,
    question: "Which protocol is used for sending emails?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "SSH"
    ],
    correctAnswer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers."
  },
  {
    id: 11,
    question: "What is the purpose of ARP in networking?",
    options: [
      "To resolve domain names to IP addresses",
      "To resolve IP addresses to MAC addresses",
      "To encrypt network traffic",
      "To compress data packets"
    ],
    correctAnswer: 1,
    explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in a local network."
  },
  {
    id: 12,
    question: "Which of these is a connection-less protocol?",
    options: [
      "TCP",
      "UDP",
      "HTTP",
      "FTP"
    ],
    correctAnswer: 1,
    explanation: "UDP (User Datagram Protocol) is connectionless, meaning it doesn't establish a dedicated end-to-end connection."
  },
  {
    id: 13,
    question: "What is the purpose of NAT?",
    options: [
      "To encrypt network traffic",
      "To translate private IP addresses to public ones",
      "To manage network bandwidth",
      "To route packets between networks"
    ],
    correctAnswer: 1,
    explanation: "NAT (Network Address Translation) allows multiple devices with private IP addresses to share a single public IP address."
  },
  {
    id: 14,
    question: "Which port number is typically used for HTTPS?",
    options: [
      "21",
      "443",
      "80",
      "25"
    ],
    correctAnswer: 1,
    explanation: "HTTPS typically uses port 443 for secure web traffic."
  },
  {
    id: 15,
    question: "What is a subnet mask used for?",
    options: [
      "To identify the network portion of an IP address",
      "To encrypt network traffic",
      "To compress data packets",
      "To route packets between networks"
    ],
    correctAnswer: 0,
    explanation: "A subnet mask is used to determine which portion of an IP address identifies the network and which identifies the host."
  },
  {
    id: 16,
    question: "What is the purpose of ICMP?",
    options: [
      "To establish secure connections",
      "To send error messages and operational information",
      "To assign IP addresses",
      "To transfer files"
    ],
    correctAnswer: 1,
    explanation: "ICMP (Internet Control Message Protocol) is used for sending error messages and operational information about network conditions."
  },
  {
    id: 17,
    question: "Which of these is NOT a valid IPv4 address?",
    options: [
      "192.168.1.1",
      "256.256.256.256",
      "10.0.0.1",
      "172.16.0.1"
    ],
    correctAnswer: 1,
    explanation: "256.256.256.256 is invalid because IPv4 address octets can only range from 0 to 255."
  },
  {
    id: 18,
    question: "What is a VLAN used for?",
    options: [
      "To increase network speed",
      "To segment a network into multiple logical networks",
      "To encrypt network traffic",
      "To compress data packets"
    ],
    correctAnswer: 1,
    explanation: "VLANs (Virtual LANs) allow network administrators to create separate logical networks within a physical network."
  },
  {
    id: 19,
    question: "Which protocol is used for secure remote access?",
    options: [
      "HTTP",
      "FTP",
      "SSH",
      "SMTP"
    ],
    correctAnswer: 2,
    explanation: "SSH (Secure Shell) provides secure remote access to network devices and servers."
  },
  {
    id: 20,
    question: "What is the purpose of BGP in networking?",
    options: [
      "To encrypt data",
      "To route traffic between different autonomous systems",
      "To assign IP addresses",
      "To manage local network traffic"
    ],
    correctAnswer: 1,
    explanation: "BGP (Border Gateway Protocol) is used to exchange routing information between different autonomous systems on the internet."
  }
];
