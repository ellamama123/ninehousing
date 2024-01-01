import React from "react";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

export default function Regulation() {
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <div>
        <h1 className="regulation-title" style={{ color: '#FFD600', fontWeight: 'bold', fontSize: '36px'}}>GENERAL TERMS & CONDITIONS IN ACCOMMODATION</h1>
        <div>
            <h5 style={{fontSize: '18px', fontWeight: '600'}}>1. CONDITIONS AT START & END OF THE LEASE</h5>
            <p>At the start of the Lease Contract, the Premise is or shall be delivered to and accepted by the Lessee in its present condition.</p>
            <p>The Lessee shall surrender the Premise to the Lessor at the end of the Lease Contract in the condition as described at the start of the lease, excepting any subsequent work done by the Lessor and normal ageing during the renting period.</p>
        </div>
        <div>
            <h5 style={{fontSize: '18px', fontWeight: '600'}}>2. USE OF PREMISES</h5>
            <p>At the start of the Lease Contract, the Premise is or shall be delivered to and accepted by the Lessee in its present condition.</p>
            <p>The Lessee shall surrender the Premise to the Lessor at the end of the Lease Contract in the condition as described at the start of the lease, excepting any subsequent work done by the Lessor and normal ageing during the renting period.</p>
        </div>

      </div>
    </div>
  );
}
