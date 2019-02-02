import React from 'react'

export const CardDevice = ({name,imageUrl,status, unlockDevice, lockDevice, lockStatus}) => {
    return (
        <div className="card">
            <div className="text-center">{name}</div>
            <div className="row">
                <div className="col-md">
                    <img src={imageUrl} className="box" style={{
                    width: '300px',
                    height: '300px',
                    margin: 'auto'
                    }}/>
                </div>
                <div className="col-md">
                    <div className="row">
                        <div className="col">Status</div>
                        <div className="col">
                            <div className="text-danger">
                                {
                                    status ? <div className="text-success">Active</div> :
                                    <div className="text-danger">Not Active</div>
                                }
                            </div>
                        </div>
                        <div className="col">
                            {
                                status ?
                                lockStatus ?
                                <div className="text-danger">Tracking</div>
                                :
                                <div className="text-success">Untracked</div>
                                :
                                <div className="text-danger">NO STATUS</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                lockStatus ?
                <button 
                    className="btn btn-danger" 
                    
                    onClick={e => unlockDevice(false)}
                >Untrack Device</button>
                :
                <button 
                    className="btn btn-danger" 
                    
                    onClick={e => lockDevice(false)}
                >Track Device</button>
            }
        </div>
    )
}