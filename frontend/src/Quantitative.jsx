import "./Quantitative.css";

function Quantitative() {
  const topics = [
    {
      icon: "🔢",
      title: "Number System",
      description: "Numbers, divisibility, remainders, HCF and LCM",
      questions: 20,
    },
    {
      icon: "📊",
      title: "Percentages",
      description: "Percentage increase, decrease and applications",
      questions: 20,
    },
    {
      icon: "💰",
      title: "Profit & Loss",
      description: "Cost price, selling price, profit and discount",
      questions: 20,
    },
    {
      icon: "⚖️",
      title: "Ratio & Proportion",
      description: "Ratios, proportions and related problems",
      questions: 20,
    },
    {
      icon: "📈",
      title: "Average",
      description: "Calculate and solve problems involving averages",
      questions: 15,
    },
    {
      icon: "⏱️",
      title: "Time & Work",
      description: "Work efficiency, combined work and wages",
      questions: 20,
    },
    {
      icon: "🚗",
      title: "Time, Speed & Distance",
      description: "Speed, distance, trains and relative motion",
      questions: 20,
    },
    {
      icon: "🏦",
      title: "Simple & Compound Interest",
      description: "Interest, principal, rate and amount",
      questions: 20,
    },
    {
      icon: "👥",
      title: "Problems on Ages",
      description: "Age-based equations and relationship problems",
      questions: 15,
    },
    {
      icon: "🎲",
      title: "Permutation & Combination",
      description: "Counting arrangements and selections",
      questions: 20,
    },
  ];

  return (
    <div className="quant-page">

      {/* NAVBAR */}
      <nav className="quant-navbar">

        <div className="quant-logo">
          CareerPrep
        </div>

        <button className="back-btn">
          ← Back
        </button>

      </nav>

      {/* HEADER */}
      <section className="quant-header">

        <p className="quant-label">
          APTITUDE • QUANTITATIVE ABILITY
        </p>

        <h1>
          Quantitative Ability
        </h1>

        <p>
          Strengthen your mathematical skills with
          topic-wise practice and improve your
          aptitude performance.
        </p>

      </section>

      {/* TOPICS */}
      <section className="quant-topics">

        <div className="topics-heading">
          <div>
            <h2>Practice Topics</h2>

            <p>
              Choose a topic to start practicing.
            </p>
          </div>

          <span className="topic-count">
            {topics.length} Topics
          </span>
        </div>

        <div className="quant-grid">

          {topics.map((topic, index) => (

            <div
              className="quant-card"
              key={index}
            >

              <div className="quant-card-top">

                <div className="quant-icon">
                  {topic.icon}
                </div>

                <span className="question-count">
                  {topic.questions} Questions
                </span>

              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <button className="start-btn">
                Start Practice →
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Quantitative;