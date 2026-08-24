window.ResumeData = {
  profile: {
    name: { ko: "심은하", en: "Eunha Sim" },
    role: { ko: "Physical AI Researcher", en: "Physical AI Researcher" },
    summary: {
      ko: "로봇 지능과 제어 기술을 연구하고, 시뮬레이션에서 검증한 기술을 실제 산업 현장에 연결합니다.",
      en: "I research robot intelligence and control, bridging simulation-validated technology with real-world industrial systems.",
    },
    current: {
      ko: "포항산업과학연구원(RIST) · 책임연구원",
      en: "Research Institute of Industrial Science & Technology (RIST) · Researcher",
    },
    email: "sehrachel@naver.com",
    phoneDisplay: "+82 10-6632-7061",
    phoneHref: "+821066327061",
  },

  education: [
    {
      sortKey: "2016-03",
      period: "2016.03 — 2019.02",
      institution: { ko: "이화여자고등학교", en: "Ewha Girls' High School" },
      title: { ko: "졸업", en: "High School Diploma" },
      meta: [],
    },
    {
      sortKey: "2020-03",
      period: "2020.03 — 2024.02",
      institution: { ko: "중앙대학교", en: "Chung-Ang University" },
      title: { ko: "기계공학부 · 공학사 · 졸업", en: "B.S. in Mechanical Engineering · Graduated" },
      meta: [
        { ko: "평점 4.11 / 4.5", en: "GPA 4.11 / 4.5" },
      ],
    },
    {
      sortKey: "2024-03",
      period: "2024.03 — 2026.02",
      institution: { ko: "한국과학기술원(KAIST)", en: "Korea Advanced Institute of Science and Technology (KAIST)" },
      title: { ko: "기계공학과 · 공학석사 · 졸업", en: "M.S. in Mechanical Engineering · Graduated" },
      meta: [
        { ko: "로봇 및 시뮬레이션 연구실 · 지도교수 이두용", en: "Robotics & Simulation Laboratory · Advisor: Prof. Doo Yong Lee" },
      ],
      thesis: {
        label: { ko: "석사학위 논문", en: "Master's Thesis" },
        text: {
          ko: "낙석 제거 자율주행 로봇을 위한 적응형 목표 엔트로피 기반 모방학습",
          en: "Imitation Learning with Adaptive Target Entropy for an Autonomous Debris-Removal Robot",
        },
      },
    },
  ],

  research: [
    {
      sortKey: "2021-12",
      period: "2021.12 — 2023.05",
      institution: {
        ko: "중앙대학교 보조 및 재활로봇 연구실 (지도교수: 이기욱)",
        en: "Assistive & Rehabilitation Robotics Lab, Chung-Ang University (Advisor: Prof. Giuk Lee)",
      },
      title: { ko: "학부연구생", en: "Undergraduate Researcher" },
      projects: [
        { ko: "EMG 센서 기반 무게 측정 시스템 개발", en: "EMG Sensor-Based Weight Estimation System" },
        { ko: "Instantaneous Cost Mapping 기반 신진대사 에너지 고속 측정 플랫폼", en: "Fast Metabolic Cost Estimation Platform Using Instantaneous Cost Mapping" },
        {
          ko: "로봇 시스템 통합 설계·구축 (CAN·EtherCAT 통신, LabVIEW 기반 모터 제어)",
          en: "Integrated Robot System Design and Implementation (CAN/EtherCAT Communication, LabVIEW-Based Motor Control)",
        },
      ],
    },
    {
      sortKey: "2023-07",
      period: "2023.07 — 2023.11",
      institution: {
        ko: "서울대학교 동적로봇시스템 연구실 (지도교수: 박재흥)",
        en: "Dynamic Robotic Systems Lab, Seoul National University (Advisor: Prof. Jaeheung Park)",
      },
      title: { ko: "학부연구생", en: "Undergraduate Researcher" },
      projects: [
        { ko: "MPC 기반 차량 경로 추종 제어기", en: "MPC-Based Vehicle Path-Tracking Controller" },
        { ko: "CARLA 시뮬레이터 기반 제어기 구현 및 검증", en: "Controller Implementation and Validation in CARLA" },
        { ko: "ROS 기반 모바일 로봇·협동로봇 제어", en: "ROS-Based Mobile Robot and Collaborative Robot Control" },
      ],
      links: [
        {
          label: { ko: "MPC·CARLA 주행 영상", en: "MPC·CARLA driving demo" },
          title: {
            ko: "MPC 기반 차량 경로 추종 제어기 CARLA 시뮬레이션 영상",
            en: "CARLA simulation of the MPC-based vehicle path-tracking controller",
          },
          url: "assets/videos/snu-mpc-carla-demo.mp4",
        },
        {
          label: { ko: "연구 발표 영상", en: "Research presentation video" },
          title: {
            ko: "MPC 기반 차량 경로 추종 제어기 CARLA Simulator 구현 발표",
            en: "Lab meeting presentation: MPC-based vehicle path tracking in CARLA Simulator",
          },
          url: "https://www.youtube.com/watch?v=pNXzbjuuVS0",
        },
      ],
    },
    {
      sortKey: "2024-03",
      period: "2024.03 — 2026.02",
      institution: {
        ko: "KAIST 로봇 및 시뮬레이션 연구실 (지도교수: 이두용)",
        en: "Robotics & Simulation Laboratory, KAIST (Advisor: Prof. Doo Yong Lee)",
      },
      title: { ko: "석사연구원", en: "Graduate Researcher" },
      projects: [
        {
          ko: "적응형 목표 엔트로피 기반 낙석 제거 자율주행 로봇",
          en: "Autonomous Debris-Removal Robot with Adaptive Target Entropy",
          url: "assets/videos/kaist-debris-removal-simulation.mp4",
          linkTitle: {
            ko: "Gazebo 기반 낙석 제거 자율주행 로봇 연구 시뮬레이션",
            en: "Gazebo simulation of the autonomous debris-removal robot",
          },
        },
        {
          ko: "Point Cloud 기반 Haptic Rendering 원격 로봇 제어",
          en: "Point Cloud-Based Haptic Rendering for Remote Robot Control",
          url: "assets/videos/kaist-haptic-teleoperation.mp4?v=2.24",
          linkTitle: {
            ko: "Point Cloud 기반 Haptic Rendering 원격 로봇 제어 영상",
            en: "Point cloud-based haptic rendering and robot teleoperation demo",
          },
        },
      ],
    },
    {
      sortKey: "2026-01",
      period: { ko: "2026.01 — 현재", en: "2026.01 — Present" },
      institution: { ko: "포항산업과학연구원(RIST)", en: "Research Institute of Industrial Science & Technology (RIST)" },
      title: { ko: "소재공정연구그룹 · 책임연구원", en: "Material Process Research Group · Researcher" },
      projects: [
        {
          ko: "대형원료 하역기 자동화",
          en: "Large-Scale Raw-Material Ship Unloader Automation",
          note: { ko: "특허 출원 1건", en: "1 patent application" },
          url: {
            ko: "projects/large-ship-unloader.html?lang=ko&v=2.29",
            en: "projects/large-ship-unloader.html?lang=en&v=2.29",
          },
          newTab: false,
          linkTitle: {
            ko: "대형원료 하역기 자동화 시뮬레이션과 특허 보기",
            en: "View the large-scale ship unloader simulation and patent application",
          },
        },
        { ko: "선석 스케줄링·하역시간 예측", en: "Berth Scheduling and Unloading-Time Prediction" },
        { ko: "소결공장 대차이력 자동관리", en: "Automated Tracking of Sinter Plant Car History" },
        {
          ko: "AI Agent 기반 사내 업무 자동화 및 확산",
          en: "AI Agent-Based Internal Business Process Automation and Adoption",
          note: { ko: "산업현장 3D 모델링", en: "industrial 3D modeling" },
          url: {
            ko: "projects/industrial-3d-modeling-agent.html?lang=ko&v=2.29",
            en: "projects/industrial-3d-modeling-agent.html?lang=en&v=2.29",
          },
          newTab: false,
          linkTitle: {
            ko: "AI Agent 기반 산업현장 3D 모델링·지식 구조화 프로젝트 보기",
            en: "View the AI agent project for industrial 3D modeling and knowledge structuring",
          },
        },
      ],
    },
  ],

  awards: [
    {
      sortKey: "2022-05-18",
      date: "2022.05.18",
      type: { ko: "수상", en: "Award" },
      title: { ko: "2021 Winter MESTER 프로그램 · 최우수상", en: "2021 Winter MESTER Program · Grand Prize" },
      institution: { ko: "중앙대학교 기계공학부", en: "School of Mechanical Engineering, Chung-Ang University" },
      topic: {
        ko: "EMG 센서 기반 무게 측정 시스템 개발",
        en: "EMG Sensor-Based Weight Estimation System",
      },
      poster: {
        src: "assets/posters/emg-weight-estimation.jpg",
        alt: {
          ko: "EMG 센서 기반 무게 측정 시스템 개발 포스터",
          en: "Poster for the EMG Sensor-Based Weight Estimation System",
        },
      },
    },
    {
      sortKey: "2022-10-11",
      date: "2022.10.11",
      type: { ko: "수상", en: "Award" },
      title: { ko: "2022 Summer MESTER 프로그램 · 최우수상", en: "2022 Summer MESTER Program · Grand Prize" },
      institution: { ko: "중앙대학교 기계공학부", en: "School of Mechanical Engineering, Chung-Ang University" },
      topic: {
        ko: "Instantaneous Cost Mapping 기반 호흡 신진대사 에너지 고속 측정 플랫폼",
        en: "Fast Respiratory Metabolic Cost Estimation Platform Using Instantaneous Cost Mapping",
      },
      poster: {
        src: "assets/posters/icm-mester-2022.jpg",
        alt: {
          ko: "2022 Summer MESTER Instantaneous Cost Mapping 연구 포스터",
          en: "2022 Summer MESTER poster on metabolic cost estimation using Instantaneous Cost Mapping",
        },
      },
    },
    {
      sortKey: "2023-00",
      date: "—",
      type: { ko: "발표", en: "Presentation" },
      title: { ko: "제18회 한국로봇종합학술대회 포스터 발표", en: "Poster Presentation at the 18th Korea Robotics Society Annual Conference" },
      institution: { ko: "한국로봇학회", en: "Korea Robotics Society" },
      topic: {
        ko: "Instantaneous Cost Mapping 기반 호흡 신진대사 에너지 고속 측정 플랫폼",
        en: "Fast Respiratory Metabolic Cost Estimation Platform Using Instantaneous Cost Mapping",
      },
      poster: {
        src: "assets/posters/icm-metabolic-cost.jpg",
        alt: {
          ko: "제18회 한국로봇종합학술대회 발표 포스터",
          en: "Poster presented at the 18th Korea Robotics Society Annual Conference",
        },
      },
    },
  ],

  skills: [
    {
      category: { ko: "Programming", en: "Programming" },
      items: ["C++", "Python", "LabVIEW"],
    },
    {
      category: { ko: "Robotics & Control", en: "Robotics & Control" },
      items: ["ROS", "Gazebo", "CARLA", "MPC", "PID", "ILC"],
    },
    {
      category: { ko: "AI & Data", en: "AI & Data" },
      items: ["LLM Agent", "Prompt Engineering", "Imitation Learning", "Reinforcement Learning", "GPR", "SVM", "CatBoost", "LightGBM"],
    },
    {
      category: { ko: "Perception & Sensors", en: "Perception & Sensors" },
      items: ["RGB-D", "Point Cloud", "LiDAR", "IMU", "EMG", "Haptic"],
    },
    {
      category: { ko: "Hardware & Communication", en: "Hardware & Communication" },
      items: ["EtherCAT", "CAN", "BLDC Motor", "ELMO Driver"],
    },
  ],

  credentials: [
    {
      type: { ko: "영어", en: "English" },
      name: "TOEIC",
      score: "855 / 990",
      date: "2023.05.28",
    },
    {
      type: { ko: "영어", en: "English" },
      name: "TEPS",
      score: "364 / 600",
      date: "2023.09.16",
    },
    {
      type: { ko: "영어", en: "English" },
      name: "TOEIC Speaking",
      score: "IH · 150",
      date: "2025.07.12",
    },
  ],
};
