import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

export default function InstaFeed(){
    return (
        <center>
          <h2 className="major">My Foodie Adventures</h2>   
          <StaticQuery
                query={graphql`
                {
                  allInstaNode {
                    edges {
                      node {
                        original
                        dimensions {
                          height
                          width
                        }
                      }
                    }
                  }
                }              
              `}
              render={data => (
                data.allInstaNode.edges.map(edge => {
                  return <img src={edge.node.original} alt="" width="200px" height="200px"/>
                })
              )}
              />
          </center>
    )
}