import { List, ListItemText, ListItem, Divider } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import AnalysisInfo from './AnalysisInfo'

// TODO: Keys bei allen .map überprüfen & überarbeiten
export default function MoleculeInfo({ molecule }) {
  return (
    <List sx={{ maxHeight: 400, overflow: 'auto' }}>
      {molecule.analyses.length !== 0 ? (
        <>
          <ListItem>
            <ListItemText primary="Analyzed Properties:" />
          </ListItem>
          <Divider />
        </>
      ) : (
        <ListItem>
          <ListItemText primary="No analyses available" />
        </ListItem>
      )}
      {molecule.analyses.map((analysis, i, analyses) => {
        return (
          <React.Fragment
            key={`${JSON.stringify(analysis)} ${i.toString()} ${
              molecule.smiles
            }`}
          >
            {i === 0 ? null : <Divider></Divider>}
            <AnalysisInfo analysis={analysis}></AnalysisInfo>
          </React.Fragment>
        )
      })}
    </List>
  )
}

MoleculeInfo.propTypes = {
  molecule: PropTypes.object.isRequired,
}
