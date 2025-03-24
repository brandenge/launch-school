energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']
if 'fossil' in energy:
  energy.remove('fossil')
energy.append('geothermal')
print(energy)
