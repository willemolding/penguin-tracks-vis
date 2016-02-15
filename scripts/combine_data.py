
import pandas as pd
import os
import fnmatch
import re


total_df = pd.DataFrame()

root = '../data/'

for file in os.listdir(root):
	if fnmatch.fnmatch(file, '*.csv'):
		df = pd.read_csv(root+file)

		if 'bor' in file:
			sitename = 'Boronia Beach'
		elif 'bru' in file:
			sitename = 'Bruny Island'
		elif 'wed' in file:
			sitename = 'Wedge Island'
		else:
			raise ValueError("unknown location")

		df['site'] = pd.Series([sitename]*df.shape[0], index=df.index) 


		match = re.search('[0-9]+', file)
		end_index = match.span()[1]


		df['penguin_id'] = pd.Series([file[:end_index]]*df.shape[0], index=df.index)

		track_id = file.split('.')[0]
		df['track_id'] = pd.Series([track_id]*df.shape[0], index=df.index)


		total_df = total_df.append(df)

total_df.to_csv('../combined_tracks.csv', index=False)



