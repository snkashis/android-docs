import React from 'react'
import {config} from 'config'

module.exports = React.createClass({
  propTypes() {
    return {router: React.PropTypes.object}
  },
  render() {
    
    const page = this.props.route.page.data
    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: page.body
        }}/>
      </div>
    )
  }
})
