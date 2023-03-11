from js import data as s
import pandas as pd

lines = s.split('\n')
headers = lines[0].split(',')
data = [d.split(',') for d in lines[1:] if len(d.strip()) > 0]

df = pd.DataFrame(data, columns=headers)

print('data')
print(df.head().to_markdown())
print('-' * 15)
print([{c: r[c] for c in df.columns} for _, r in df.iterrows()][:5])

[{c: r[c] for c in df.columns} for _, r in df.iterrows()]
# {'rows': df.shape[0]}
# df