---
title: "MLB Game Tracker"
date: "2020-10-13"
---

<!-- - [Intro](#intro)
- [Analysis / Data Mining / Planning](#analysis-data-mining-planning)
- [Backend](#backend)
- [Frontend](#frontend)
- [Automation](#automation) -->


## Intro

MLB Game Tracker is a MERN (MongoDB, Express, React, Node.js) project with D3.js for visualizations. This is a project that is many years coming. The inspiration came from a great baseball analytics book called The Book: Playing the Percentages in Baseball. This book covers many topics that are mostly understood by people that follow baseball. Ideas like bunting is almost always a bad idea (same with steals), hot streaks aren't really a thing (neither are cold streaks) and even goes into optimizing your lineup (guess what? The cleanup hitter isn't as important as your little league coach thought). 

Ultimately my goal will be to create a view that allows users to track what the expected runs are for each team compared to the actual number of runs scored. And to give a view into the win probability for each team throughout a game. 

After the site is built, I will work to automate the data export (from bigdataball), data transformation, and data update to MongoDB for the 2021 MLB Season. 

So right now I see this as 4 phases:
1. Analysis / Data Mining / Planning
2. Backend
3. Frontend
4. Automation/Refactor

*** 

## Analysis, Data Mining, Planning

### *Find and Explore Data*

This first step of this process was to gather the data and transform it to get the metrics and data points I need. Over the past 2+ years, I have worked to try to find (or scrape) MLB play-by-play data that was free. I have gotten close many times, but I found bigdataball.com and they have play by play data that gets updated each day for a reasonable price (I got 2020 data for ~$35). So I ran with this. The biggest problem with this dataset is that it is an .xlsx file with formatting, so not incredibly machine readable. The two biggest adjustments were transforming the ball and strike columns into 2 ball and strike counter columns and getting rid of any merged cells. After doing that, the file was readable using pandas.read_csv().

![xlsx-format-changes](../images/mlb-game-tracker-analysis-xlsx-format.png)

Next, I need to add some columns to my datasets. Stuff like runs in current inning and game state (inning + outs + base runners + score difference). I have a Python script that I wrote a couple years ago that I was able to edit and make work for this. It runs pretty slow because I have to calculate the runs till end of inning for each row of data (~190,000 in 2019). I'm planning to go back and refactor that code during the automation phase. 



### *Get Win % Column*

My next step is to build out the win % columns. This is done in 4 parts:

First, I create a score table to get the winners from each game. I do this by taking the max home score and the max away score for each game and comparing the values. If the home team wins, I set the home team win value to 1; otherwise 0. Taking the average of this column now gives me the home team win % 

```
score = pd.pivot_table(data, 
                            values = ['post_road_score', 'post_home_score'],
                            index = ['dataset', 'game_id'],
                            aggfunc = [np.max])

score = pd.DataFrame(score.to_records())

score.columns = ['dataset', 'game_id', 'final_home_score', 'final_road_score']

home_winner_list = []

for i in range(len(score)):
    if score['final_home_score'][i] > score['final_road_score'][i]:
        home_winner_list.append(1)
    else:
        home_winner_list.append(0)
    
    
score['home_team_win'] = home_winner_list
```

I validated this by checking the results for each season and got the below table. Home teams over the last 5 years have won 53% of games so this checks out. 71% of home teams winning in the 2017 playoffs is pretty crazy.

![MLB Seasons Home Team Win %](../images/MLB-Home-Team-Win-%-by-Season.png)

Next, I joined the 3 columns (final home score, final road score, and home team win) back to the original dataset (data)

```
data = data.merge(score, 
                  on = ['dataset', 
                        'game_id'], 
                  how='left')

data.head()
```

Finally, I created the win % by game state (Base Runners + Outs + Inning + Score Difference) and joined these values back to the main dataset

```
base_out_state_home_win_pct = pd.pivot_table(data, 
                                              values = 'home_team_win', 
                                              index = ['runner_on_1b_ind', 
                                                       'runner_on_2b_ind', 
                                                       'runner_on_3b_ind', 
                                                       'total_outs',
                                                       'inning',
                                                       'home_minus_away_score'], 
                                              aggfunc = [np.mean])

base_out_state_home_win_pct = pd.DataFrame(base_out_state_home_win_pct.to_records())

base_out_state_home_win_pct.columns = ['runner_on_1b_ind', 
                                       'runner_on_2b_ind', 
                                       'runner_on_3b_ind', 
                                       'total_outs', 
                                       'inning', 
                                       'home_minus_away_score',
                                       'home_team_win_pct']

base_out_state_home_win_pct

data = data.merge(base_out_state_home_win_pct, 
                  on = ['runner_on_1b_ind', 
                        'runner_on_2b_ind', 
                        'runner_on_3b_ind', 
                        'total_outs', 
                        'inning', 
                        'home_minus_away_score'], 
                  how='left')
```

Now, I have my win % column. Next step is to check if looking at Win % over time is interesting at all

### _Visualize_ - to validate continuing

I went back to google sheets for this and created two views

First - Home Win % over time

![Home Team Win % Graph](../images/Win%-Graph.png)

Second - Runs + Expected Runs over time

![Runs + Expected Runs Graph](../images/Runs+ExpRuns-Graph.png)

Both look pretty interesting to me, so I'll keep going with the project. Not sure what the final view will end up being, but I think I'm going to run with Win % for now. There are fewer exceptions to consider and easier to interpret. When talking about data viz, I think those both prior points are very important. 

***

## Backend
Todo:
- design schema

***

## Frontend
[Wireframe](https://whimsical.com/MJ7veDGuBiw6asA7v8RxfS)
![Wireframe](../images/Wireframe.png)
Todo: 
- diagram architecture 
- build visual (learn how with d3)

***

## Automation
Notes of needed fixes:
- post score (home and away)
- winning team (needs to use post score)
- 


