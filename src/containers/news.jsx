import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  news: state.news.payload,
})

class News extends React.Component {
  renderNews = () => {
    const { news } = this.props;

    return news.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.data}</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        News page!
        {this.renderNews()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(News);
