import geojson
import pandas as pd

df = pd.read_csv('../combined_tracks.csv')

feature_list = []

for name, group in df.groupby('penguin_id'):
	group = group.sort(['Date', 'Time'])


	points = []
	for index, row in group.iterrows():
		points.append( (row['Latitude'], row['Longitude']) )

	line = geojson.LineString(points)
	feature_list.append( geojson.Feature(geometry=line, properties={'penguin_id' : name}) )


feature_collection = geojson.FeatureCollection(feature_list)

geojson.dump(feature_collection, open('../tracks.json', 'w'))

