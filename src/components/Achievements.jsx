export default function Achievements() {
  const achievementsList = [
    {
      icon: '🎓',
      title: 'B.Tech IT — CGPA 8.60',
      sub: 'Shah & Anchor Kutchhi Engineering College • Mumbai University',
      desc: 'Consistently strong academic performance across core CS/IT subjects including Data Structures, Database Management Systems, Computer Networks, and Cloud Computing.',
      delay: 'delay-1',
    },
    {
      icon: '⚔️',
      title: "Striver's A2Z DSA Sheet — Self-Study",
      sub: 'Active Learner • LeetCode + GFG',
      desc: "Systematically working through TUF's A2Z DSA sheet covering Arrays, Linked Lists, Trees, Graphs, DP, and more — building problem-solving muscle one topic at a time.",
      delay: 'delay-2',
    },
    {
      icon: '☁️',
      title: 'AWS IAM — Hands-On Lab',
      sub: 'Amazon Web Services • Cloud Fundamentals',
      desc: 'Completed hands-on AWS IAM lab covering users, groups, permissions policies, roles, and security best practices for identity and access management in cloud environments.',
      delay: 'delay-3',
    },
    {
      icon: '🧠',
      title: 'Academic ML Projects',
      sub: 'Machine Learning • Python • Scikit-Learn',
      desc: 'Built and evaluated classification models using Random Forest and SVM algorithms as part of coursework — applied to real-world datasets with feature engineering and model analysis.',
      delay: 'delay-4',
    },
  ];

  return (
    <section id="achievements">
      <div className="section-header fade-up">
        <span className="section-label">04 &mdash; achievements</span>
        <h2 className="section-title">Progress &amp; <span>Milestones</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="timeline">
        {achievementsList.map((item, idx) => (
          <div key={idx} className={`timeline-item fade-up ${item.delay}`}>
            <div className="timeline-dot">{item.icon}</div>
            <div className="timeline-content">
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-sub">{item.sub}</div>
              <div className="timeline-desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
