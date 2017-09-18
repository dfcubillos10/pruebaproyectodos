import React, { Component } from 'react';

class Tenant extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <tr>
        <td className="aptNumber">{this.props.tenant.number}</td>
        <td className="tenantName">{this.props.tenant.tenants[0].name}</td>
        <td className="tenantPhone">{this.props.tenant.tenants[0].cel}</td>
      </tr>
    );
  }
}

export default Tenant;
