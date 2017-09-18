import React, { Component } from 'react';
import Tenant from './Tenant.js';

class Tenants extends Component {
  constructor(props) {
    super (props);
  }

  renderTenants(){
    return this.props.tenants.map(
      (t,i)=>{
      return <Tenant tenant={t} key={i}/>;
      }
    );
  }
  render() {
    return (
      <div>
        <table>
          <tr>
           <th>Apto</th>
           <th>Nombre</th>
           <th>Telefono</th>
         </tr>
        {this.renderTenants()}
        </table>
      </div>
    );
  }
}

export default Tenants;
