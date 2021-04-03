const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <h2>Please sign up</h2>
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
