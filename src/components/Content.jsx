export default function Content() {
  const contentList = [
    {
      type: 'yt',
      icon: '📺',
      title: 'YouTube Shorts',
      desc: 'Short-form tech education content breaking down backend and cloud concepts for beginners — fast, clear, and no fluff.',
      topics: ['Big Data', 'AWS Networking', 'IoT Basics'],
      fadeClass: 'fade-left',
    },
    {
      type: 'ig',
      icon: '📸',
      title: 'Instagram Reels',
      desc: 'Tech education reels covering cloud, data infrastructure, and IoT — making complex topics digestible for the next-gen dev community.',
      topics: ['Big Data', 'AWS Networking', 'IoT'],
      fadeClass: 'fade-right',
    },
  ];

  return (
    <section id="content">
      <div className="section-header fade-up">
        <span className="section-label">05 &mdash; content creation</span>
        <h2 className="section-title">I Also <span>Teach</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="content-grid">
        {contentList.map((item, idx) => (
          <div key={idx} className={`content-card ${item.fadeClass}`}>
            <div className={`content-icon ${item.type}`}>{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="content-topics">
                {item.topics.map((topic, topicIdx) => (
                  <span key={topicIdx} className="topic-pill">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
