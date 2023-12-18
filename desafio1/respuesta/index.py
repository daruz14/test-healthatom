import json
    

def less_density_titans(sightings):
    titans_days = [float("inf")] * 366 # Array with avistment of titans per day

    for start, end in sightings:
      start = max(start, 0)

      end = min(end, 365)

      for i in range(start, end + 1):
        # day 32 of year is 1 february and day 335 of year is 1 december
        # if is neccessary include the days 1 to 31 and 335 to 365 only need to change that condition
        if i < 32 or i > 334:
          continue

        if titans_days[i] == float("inf"):
          titans_days[i] = 0
        
        titans_days[i] += 1
    
    less_density_day = titans_days.index(min(titans_days))

    return less_density_day


def main():   
  with open('../last_year.json') as f:
      avistamientos = json.load(f) 
  result = less_density_titans(avistamientos)

  print(f"El día con la menor densidad de titanes es: {result}")


if __name__ == "__main__":
  main()
