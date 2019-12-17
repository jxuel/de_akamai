import sys
import re

def decode():
  filename = sys.argv[1]
  with open(filename, 'r') as file:
    data = file.read()

  array = re.findall(r'_ac\[.*?\]', data)
  var = re.findall(r'_ac\s=\s(\[.*?\])', data)

  _ac = eval(var[0])
  for va in array:
    data = data.replace(va, '"%s"'%(eval(va)))

  with open ("AK_output.js", 'w+') as file:
    file.write(data)
  print('Finished')

if __name__ == "__main__":
  decode()
