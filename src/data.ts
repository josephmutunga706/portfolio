// ALL EDITABLE CONTENT LIVES HERE. Images are in /public/images.
export type Tag = "GIS" | "Remote Sensing" | "Web" | "GeoAI";
export interface Detail { heading: string; text?: string | string[]; items?: string[] }
export interface Shot { src: string; caption: string }
export interface Project {
  id: string; title: string; tag: Tag; summary: string; image?: string; gallery?: Shot[];
  links?: { label: string; url: string }[]; details: Detail[];
}
const img = (n: string) => `${import.meta.env.BASE_URL}images/${n}`;

export const profile = {
  name: "Joseph Ndung’u Mutunga",
  phrases: ["A Remote Sensing Expert", "A Geospatial Developer", "A Geospatial Analyst", "A Freelancer", "A Geospatial Tutor"],
  email: "josephmutunga706@gmail.com", phone: "0745142111",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/joseph-mutunga-91a63030a/" },
    { label: "WhatsApp", url: "https://wa.me/message/BDIEL56LSRK4O1" },
    { label: "X", url: "https://x.com/joseduchyz" },
    { label: "Instagram", url: "https://www.instagram.com/joseduchyz/" },
  ],
  formEndpoint: "https://formspree.io/f/mzzjqwbd",
  stats: [{ n: "10+", l: "Clients" }, { n: "3+", l: "Years of experience" }, { n: "10+", l: "Projects delivered" }],
};

export const services: { title: string; tag: Tag; text: string; image: string }[] = [
  { title: "GIS", tag: "GIS", text: "Spatial data analysis and mapping for decision-making.", image: img("gis.jpg") },
  { title: "Remote Sensing", tag: "Remote Sensing", text: "Analyzing satellite imagery for environmental insights.", image: img("remote-sensing.jpg") },
  { title: "Web Development", tag: "Web", text: "Building interactive geospatial platforms and dashboards.", image: img("web-dev.jpg") },
  { title: "GeoAI", tag: "GeoAI", text: "AI and machine learning for geospatial predictions.", image: img("geoai.jpg") },
];

export const about = {
  intro: "I am Joseph Ndung’u Mutunga, a passionate Remote Sensing and GIS Specialist focused on using geospatial data to solve real-world challenges.",
  blocks: [
    { h: "Mission", t: "To use geospatial technologies and data science to drive sustainable, data-informed decision-making that improves lives and the environment." },
    { h: "Vision", t: "To become a leading innovator in geospatial intelligence, creating solutions that strengthen environmental resilience, urban planning and resource management." },
    { h: "My approach", t: "I combine analytical skills, remote sensing data and machine learning to extract meaningful patterns from spatial datasets." },
    { h: "Solving real problems", t: "From monitoring environmental change to early warning systems and better agricultural productivity, I build practical solutions with GIS and AI." },
  ],
  values: ["Integrity in data-driven decision-making", "Innovation through continuous learning", "Collaboration for global solutions", "Commitment to sustainable development"],
  awards: ["1st position, GEOSK Symposium at RCMRD", "2nd place, Dedan Kimathi University Hackathon", "ESRI certifications: Modern Geo Apps and Network Analysis", "NASA Lifeline simulations: certificate of participation", "IBM certification: AI and Machine Learning"],
  photo: img("about.jpg"),
};

export const projects: Project[] = [
  {
    id: "diani-climate-risk", title: "Diani Climate Risk Assessment: Sea Level Rise Modelling", tag: "Remote Sensing",
    image: img("diani-risk-map.jpg"),
    gallery: [
      { src: img("diani-risk-map.jpg"), caption: "Diani sea level risk map: five risk classes from very low to very high, with the coastline and a zoomed inset of the highest-risk bay." },
      { src: img("diani-sea-level-trend.jpg"), caption: "Annual mean sea level anomaly at Diani with the fitted linear trend (4.10 mm per year) and the 2050 projection (0.217 m)." },
    ],
    summary: "Three decades of sea level data and a five-class risk map showing which parts of the Diani coast are most exposed to sea level rise.",
    details: [
      { heading: "About this project", text: [
        "Diani is one of Kenya’s most valuable and most exposed stretches of coast. Beaches, hotels, homes and roads sit on a low coastal plain only a short distance from the sea. This project asks two questions: how fast is the sea rising here, and which parts of the coast are most at risk as it keeps rising?",
        "It combines a long sea level record starting in 1995 with a spatial risk model. The first output is a trend and a projection to 2050. The second is a map that classifies every part of the study area from very low to very high risk."] },
      { heading: "Reading the sea level chart", text: [
        "The blue line is the observed annual mean sea level anomaly, which is how far each year’s average sits above or below a reference level. The orange line is the straight-line trend fitted through those years, and the large dot is the 2050 value on that line.",
        "The trend is 4.10 mm per year. Over the roughly 30 years of record this adds up to about 12 cm, with the fitted line moving from just below zero in 1995 to about 0.11 m by 2025. Extended to 2050, the trend gives an anomaly of 0.217 m, so about another 10 cm of rise from today.",
        "The yearly values are far from smooth. The lowest values are around 2000 and 2001, at about 3 to 4 cm below the reference. There are sharp peaks in 1998 and 2007, and a strong run of high years from 2019 to 2024. The highest year in the record is 2024, at roughly 0.19 m, well above the trend line. Year-to-year swings like these reflect natural variability such as ocean and climate cycles, which is why the long-term trend matters more than any single year. The dashed vertical line marks where observed data ends and the projection begins."] },
      { heading: "Reading the risk map", text: [
        "The map covers the Diani coastal strip in UTM coordinates, with the coastline drawn as a line of purple stars. Colour shows relative risk: dark green is very low, light green is low, yellow is moderate, orange is high and red is very high.",
        "The pattern follows the land. A broad dark-green zone in the south-west interior marks higher ground that is far from the sea and well above it. Moving towards the coast, the colours shift through light green and yellow to orange, so the land closest to the shoreline is mostly high risk, as expected on a low, flat coastal plain. Narrow red corridors appear along the north-south coastal belt, and these mark the lowest and most exposed ground.",
        "The inset enlarges the single largest very-high-risk area, a low-lying bay and inlet in the south near Msambweni. Here the red zone reaches well inland from the shoreline because the land is both low and close to open water, so even modest rise or surge can reach far. This is the area where adaptation planning is most urgent."] },
      { heading: "Variables used", items: [
        "Sea level anomaly: the annual mean record that gives the trend and the 2050 projection",
        "Shoreline position: multi-date satellite imagery to measure erosion and accretion over time",
        "Elevation and slope: a digital elevation model to find the low-lying land that floods first",
        "Distance to the coast and to rivers and creeks: how close land and assets are to the water",
        "Rainfall and temperature: climate time series that show warming and changing rainfall",
        "Land use and land cover: built-up area, vegetation and mangrove cover",
        "Exposure: buildings, roads and settlements inside each risk class",
      ] },
      { heading: "Method", items: [
        "Built the annual sea level series for 1995 onward and fitted a linear trend",
        "Projected the trend to 2050 to set a planning scenario",
        "Standardised each variable to a common scale and weighted it by its influence on exposure",
        "Combined the layers in a weighted overlay to produce a five-class risk surface",
        "Compared the risk classes with the coastline to find the most exposed stretches",
      ] },
      { heading: "How it can be used", text: "Planners and county teams can use the map to decide where to set building setbacks, improve drainage, protect or restore mangroves and prioritise adaptation money. The sea level trend gives them a defensible figure to plan against." },
    ],
  },
  {
    id: "kerra-road-dashboard", title: "KeRRA Road Dashboard: Murang’a South Sub-County", tag: "Web", image: img("kerra-dashboard.jpg"),
    summary: "An interactive dashboard of the 854.7 km road network in Murang’a South: condition, surface type, drainage, facilities and ongoing works.",
    links: [{ label: "Open the live dashboard", url: "https://iggres.maps.arcgis.com/apps/dashboards/668d9945d87c42b79cf4d07646374b5b" }],
    details: [
      { heading: "About this dashboard", text: [
        "The dashboard gives road managers one place to see every road in Murang’a South Sub-County. The centre of the screen is a web map of the road network, drawn over terrain and coloured by class. Around it are indicators, charts and a road list that all update together when a user picks a surface type or a road condition in the selectors at the top.",
        "The headline figures show how much the network has to serve: 854.7 km of road, 9 facilities, 79 education institutions and 7 towns."] },
      { heading: "What the charts show", items: [
        "Road conditions: 62.8% of the network is fair, 23.04% poor, 8% very poor, 5.28% good and 0.88% under construction. So nearly a third of the network is poor or very poor, and only about 5% is in good condition.",
        "Drainage conditions: 21.46% fair, 9.85% poor and 0.7% good, while 67.99% is marked not applicable, usually because the road has no drainage works.",
        "Road network by surface type: earth roads are the largest group, followed by gravel. Track, surface dressing and asphalt make up a small share, which shows how little of the network is paved.",
        "A road list with name, class and length, for example Kambi – Maragua (class E, 7.56 km), which can be sorted and filtered",
        "Ongoing projects: a list of roads under works, including Kahaini–Kaburugi–Kiranga and Ruona – Githumu",
      ] },
      { heading: "How it is used", text: "Managers can find the poor and very poor sections quickly, see which surface types dominate, and decide where to maintain, regravel or upgrade first. Because it is a live web page, anyone with the link sees the same up-to-date information." },
      { heading: "Built with", text: "ArcGIS Dashboards with a web map, indicators, pie and bar charts, a data list and category selectors." },
    ],
  },
  {
    id: "cesmecc-mining-dashboard", title: "CESMECC Mining Sites Dashboard: Taita Taveta County", tag: "Web", image: img("mining-dashboard.jpg"),
    summary: "A monitoring dashboard tracking vegetation recovery, soil condition and rehabilitation status across 100 mining sites in Taita Taveta County.",
    links: [{ label: "Open the live dashboard", url: "https://iggres.maps.arcgis.com/apps/dashboards/9d34636dc6354574b3fa2eb74911fedc" }],
    details: [
      { heading: "About this dashboard", text: [
        "Mining leaves land that has to be rehabilitated, and county teams need to know which sites are recovering and which are not. This dashboard follows that recovery across the monitored mining sites in Taita Taveta County. It combines satellite-derived vegetation change (NDVI) with field observations, and presents them on one screen.",
        "A status selector at the top filters the whole dashboard by rehabilitation status. The map legend separates recovering, under-monitoring, requires-intervention and rehabilitated areas."] },
      { heading: "What the figures show", items: [
        "Recovery status: 43 sites show high recovery, 38 are under monitoring, 7 are rehabilitated and 12 need action. Together these cover 100 sites, so 12 sites are the priority for intervention.",
        "Soil condition: 55 sites are stable, 42 are partially stable and 3 are eroded, so most sites have stable ground and erosion is limited to a few places.",
        "Vegetation condition: most sites fall in the poor class, fewer are moderate and very few are good, which says that recovery of plant cover is still at an early stage.",
        "NDVI change across monitoring sites: a point for each site (OBS001 onward) shows whether vegetation has gained or lost greenness. Most points sit close to zero, with a few clear gains and losses, so the sites that stand out can be checked first.",
      ] },
      { heading: "How it is used", text: "Teams use it to find the 12 action-needed sites, see where vegetation is falling, and decide where to send field crews. The dashboard also notes that constant field observation will improve its accuracy, so the data is meant to be updated as the field work continues." },
      { heading: "Built with", text: "ArcGIS Dashboards, NDVI from satellite imagery and field monitoring records." },
    ],
  },
  {
    id: "landslide", title: "Landslide Susceptibility: South Pokot", tag: "Remote Sensing", image: img("landslide.jpg"),
    summary: "A five-class landslide susceptibility map of South Pokot, broken down by ward.",
    details: [
      { heading: "About this map", text: [
        "This map ranks the land in South Pokot by how likely it is to fail in a landslide. It uses five classes, from very low to extreme, drawn over the four wards of the sub-county: Chepareria, Batei, Tapach and Lelan. The grid is in UTM coordinates and the scale bar runs to 16 km.",
        "Susceptibility is not the same as an event happening. It shows where the ground conditions, such as steep slopes, make a slope more likely to fail if a trigger such as heavy rain occurs." ] },
      { heading: "What the map shows", items: [
        "Chepareria Ward, in the west and centre, is mostly dark green. Very low susceptibility covers most of it, so it is the safest ward on this map.",
        "The highest concentration of extreme (red) susceptibility is a long band on the eastern side, running through Batei and Tapach wards. This is where the terrain is steepest and most broken.",
        "Lelan Ward in the south is a mix of low and moderate classes with scattered red patches, and a strong red block in its south-west corner.",
        "A smaller red cluster appears in the north near the boundary between Chepareria and Batei, which would be missed without a map at this detail.",
        "Yellow and orange bands follow stream valleys and ridge edges throughout, showing that susceptibility changes over short distances.",
      ] },
      { heading: "How it can be used", text: "The map helps county and disaster teams decide where not to build roads, schools or homes, where to run community awareness, and where to place early warning and slope protection first. The eastern band of extreme susceptibility is the clearest priority." },
    ],
  },
  {
    id: "kiambu-ndvi", title: "Vegetation Health Monitoring: Kiamwangi, Kiambu", tag: "Remote Sensing", image: img("kiambu-ndvi.jpg"),
    summary: "An NDVI map of vegetation condition in the Kiamwangi area of Kiambu County.",
    details: [
      { heading: "About this map", text: [
        "NDVI, the Normalised Difference Vegetation Index, compares how plants reflect red and near-infrared light. Healthy green vegetation reflects a lot of near-infrared and gives high values, while bare soil, rock and built-up land give low values. This map classifies the Kiamwangi area into five classes: non-vegetation, barren, low vegetation, moderate vegetation and high vegetation.",
        "The area is about 8 km across, as the scale bar shows, so individual fields, roads and valleys can be read from the pattern."] },
      { heading: "What the map shows", items: [
        "Most of the area is bright green, high vegetation, which fits the dense farming and tree cover of this part of Kiambu.",
        "Moderate and low vegetation, in light green and yellow, forms a patchwork that follows field boundaries. This is typical of small farms that are at different stages of growth or harvest.",
        "Red non-vegetation and orange barren pixels form thin lines and small blocks. The lines follow roads and tracks, and the larger red blocks are settlements and trading centres.",
        "The long, parallel bands running north-west to south-east follow the ridges and valleys of the landscape.",
      ] },
      { heading: "How it can be used", text: "A map like this is a baseline for tracking vegetation over seasons, spotting land that is losing cover, and checking how settlement growth is replacing farmland." },
    ],
  },
  {
    id: "nairobi-lst", title: "Land Surface Temperature: Nairobi County", tag: "Remote Sensing", image: img("nairobi-lst.jpg"),
    summary: "A land surface temperature map of Nairobi County showing urban heat and cool green areas.",
    details: [
      { heading: "About this map", text: [
        "Land surface temperature (LST) is how hot the ground surface is as seen from a satellite thermal sensor. It is not the same as air temperature, but it shows very clearly where a city holds heat. This map covers Nairobi County in UTM Zone 37N and is drawn over a base map so that places and roads can be recognised.",
        "The legend runs from about 13.7 on the cool end, in green, to about 33.7 on the hot end, in red. That is a spread of 20 degrees across a single city on the same day."] },
      { heading: "What the map shows", items: [
        "The hottest land, in orange and red, forms a broad belt through the centre and east of the county. This matches dense built-up, industrial and paved areas that absorb and hold heat.",
        "The coolest land, in dark green, is in the west and north-west, where there are forests, parks and well-vegetated suburbs.",
        "The large pale-green wedge in the south matches the protected open land of Nairobi National Park, which stays far cooler than the city beside it.",
        "Small green blocks inside the hot belt show how even a single park or planted area reduces local temperature.",
      ] },
      { heading: "How it can be used", text: "The map supports urban heat planning: where to plant trees, where to keep open space, and which neighbourhoods are most exposed to heat. It also shows how the loss of green space raises surface temperature." },
    ],
  },
  {
    id: "machakos-vhi", title: "Crop Health and Drought: Machakos (VHI)", tag: "Remote Sensing", image: img("machakos-vhi.jpg"),
    summary: "A Vegetation Health Index map of Machakos County, classed from no drought to extreme drought.",
    details: [
      { heading: "About this map", text: [
        "The Vegetation Health Index (VHI) combines how green vegetation is with how warm the land surface is, to show vegetation stress. Low values mean stressed or drought-affected vegetation and high values mean healthy vegetation. This map classes Machakos County into five levels: extreme (below 10), severe (10 to 20), moderate (20 to 40), mild (30 to 40) and no drought (above 40).",
        "The layout gives the scale (1:654,635), the coordinate system (UTM Zone 37 South, Arc 1960 datum) and the date, so the map can be reproduced."] },
      { heading: "What the map shows", items: [
        "Extreme and severe stress, in red and orange, is heaviest in the north-east and along the western and south-western edges of the county. These are the drier lowlands.",
        "The central uplands are green and yellow, which means healthier vegetation. The darkest green patches mark the best vegetation condition, with no drought.",
        "Large parts of the county sit in the yellow, moderate class, so many areas are close to moving in either direction depending on rainfall.",
      ] },
      { heading: "How it can be used", text: "It helps extension officers and food security teams see where crops are under most stress, target relief and advice, and compare seasons to watch drought develop." },
    ],
  },
  {
    id: "machakos-rdi", title: "Rainfall Deficiency Index: Machakos", tag: "Remote Sensing", image: img("machakos-rdi.jpg"),
    summary: "A map of rainfall deficiency across Machakos County, with a locator inset for Kenya.",
    details: [
      { heading: "About this map", text: [
        "A rainfall deficiency map shows how far the rainfall has fallen short in each part of the county, and is used to follow drought. This map covers Machakos County, and a small inset of Kenya in the top left shows where the county sits in the country. The base is a shaded relief, so hills and valleys are visible under the data.",
        "The legend uses the same five severity classes as the vegetation health map, from extreme (below 10) to no drought (above 40)."] },
      { heading: "What the map shows", items: [
        "Extreme deficiency, in red, covers the north-east and the western and south-western margins, the same areas that show the most vegetation stress.",
        "The central part of the county is yellow and green, which shows a smaller deficiency and better conditions.",
        "Seeing the rainfall map beside the vegetation map shows that the dry areas are the same in both, which confirms the pattern.",
      ] },
      { heading: "How it can be used", text: "It supports early drought warning and planning for water, planting dates and relief in the driest parts of the county." },
    ],
  },
  {
    id: "coffee-geoai", title: "GeoAI in a Coffee Plantation", tag: "GeoAI", image: img("coffee-geoai.jpg"),
    summary: "Deep learning detection of individual coffee trees from drone imagery, run in ArcGIS Pro.",
    details: [
      { heading: "About this project", text: [
        "This project uses GeoAI, which is artificial intelligence applied to geospatial data, to count and locate trees in a coffee plantation. The base is a very high resolution drone image, and the Detect Objects Using Deep Learning tool in ArcGIS Pro finds each tree and draws a bounding box around it.",
        "The image shows the plantation in fine detail: green tree crowns on red soil, clear rows, access paths, and larger shade trees."] },
      { heading: "What the image shows", items: [
        "Each black square is one detected tree. The boxes follow the planting rows, which confirms that the model recognises the layout of the field.",
        "Boxes are sized to each crown, so smaller young trees get smaller boxes than mature ones.",
        "The big, round shade trees in the lower left and upper middle are mostly not boxed as coffee, and the denser crown cluster at the top shows many overlapping boxes. These are the spots where the model is least certain and where results need checking.",
        "The layer panel shows the drone image (DJI) and the detection outputs, which can be switched on and off for review.",
      ] },
      { heading: "How it can be used", text: "Automatic detection gives a tree count, the spacing between trees, gaps where trees are missing or dead, and the density of each block. A farm manager can use this for replanting, input planning and yield estimates without walking the whole field." },
    ],
  },
  {
    id: "aberdares", title: "Aberdares National Park: Wildlife Habitat Web Map", tag: "Web", image: img("aberdares.jpg"),
    summary: "An interactive web map of habitat suitability in Aberdare National Park, built with Leaflet.",
    details: [
      { heading: "About this web map", text: [
        "This is a web application for exploring wildlife habitat in Aberdare National Park. The map shows a Habitat Suitability Index (HSI), a score of how well each part of the park suits a chosen species. The page has its own navigation: Home, Explore Map, About, Route and Emergency Contact.",
        "The map is built with Leaflet over an OpenStreetMap base, with drawing tools for marking areas and points."] },
      { heading: "How the page works", items: [
        "The left panel holds environmental layers, NDVI, NDWI and elevation (DEM), which can be switched on, and a Combined HSI layer with a reset button.",
        "The right panel has a species selector. For the elephant it shows the photo, the preferred NDVI range of 0.2 to 0.8, a surface temperature up to 35 degrees, an elevation of 1,200 to 3,000 m and a slope up to 25 degrees. It also gives a note on the species’ documented ecology: elephants stay mostly in montane forest and bamboo and follow set migratory routes.",
        "The legend classes suitability as low, moderate or high.",
      ] },
      { heading: "What the map shows", items: [
        "High suitability, in dark green, is concentrated in the north-east of the park and in patches through the middle, where forest and bamboo cover and elevation match the species’ needs.",
        "Low suitability, in light green, covers much of the western side and the southern tip.",
      ] },
      { heading: "How it can be used", text: "Rangers and planners can use it to see where animals are most likely to be found, plan patrol routes, and understand where habitat pressure and human-wildlife conflict risks are highest." },
    ],
  },
  {
    id: "slums", title: "Mapping of Slums: Roads, Buildings and Utilities", tag: "GIS", image: img("lis-roads.jpg"),
    gallery: [
      { src: img("lis-roads.jpg"), caption: "Road network: access lanes and the perimeter road, with the settlement boundary in purple." },
      { src: img("lis-buildings.jpg"), caption: "Building structures: each orange point is one structure inside the settlement." },
      { src: img("lis-power.jpg"), caption: "Power line network: single-phase and three-phase lines, a transformer and floodlights." },
      { src: img("lis-sewer.jpg"), caption: "Sewer line network: sewer lines along the lanes and the settlement edges." },
      { src: img("lis-furniture.jpg"), caption: "Road furniture: culverts and a boda boda shed along the roads." },
    ],
    summary: "A five-layer map set of an informal settlement: roads, building structures, power, sewer lines and road furniture, drawn on high-resolution imagery.",
    details: [
      { heading: "About this project", text: [
        "Informal settlements are often missing from official maps, which makes it hard to plan services for the people who live in them. This project builds that missing record. It maps one settlement, bounded by the purple outline, as a set of layers on high-resolution aerial imagery, with each layer answering a different planning question.",
        "All five maps share the same extent, boundary, north arrow and scale bar, so they can be laid over each other and compared directly. The dense rows of iron-sheet and tiled roofs show how closely packed the settlement is, and how narrow the lanes between them are."] },
      { heading: "Map 1: Road network", items: [
        "Red lines trace the roads: a series of parallel north-south access lanes, a cross lane through the middle, and the perimeter road along the south and east, next to a busy main road.",
        "The lanes are regularly spaced, which shows the settlement has a planned grid, and they reach nearly every row of houses.",
        "The map separates what is road from what is settlement, which is the base for judging how accessible each part of the settlement is.",
      ] },
      { heading: "Map 2: Building structures", items: [
        "Each orange point marks one building structure, so the map works as a count of the settlement’s structures.",
        "The points are densest in the western and central rows, where the plots are small and close together. They are sparser in the northern extension and near the eastern edge.",
        "A structure count is the starting point for estimating population, service demand and the number of households affected by any upgrading project.",
      ] },
      { heading: "Map 3: Power line network", items: [
        "Two kinds of line are shown: single-phase lines, which serve houses along the lanes, and three-phase lines, which run along the southern and eastern edges and feed the network.",
        "There is one transformer, near the southern road, and three floodlights, two in the south-west and one in the east.",
        "The long dark stretches with no lines or floodlights show where electricity supply and street lighting are missing, which is useful for planning safety lighting.",
      ] },
      { heading: "Map 4: Sewer line network", items: [
        "Green lines show where sewer lines exist: along the northern and eastern edges, the southern road, and into several of the lanes.",
        "Many lanes have only partial sewer lines, or none, and the central area has the largest gaps. Households there depend on other sanitation, which is a public health concern.",
        "The map gives the sewer authority a clear picture of where connections should be extended first.",
      ] },
      { heading: "Map 5: Road furniture", items: [
        "Green dots show culverts. Five lie along the southern road and one at the north-eastern corner, where drainage crosses the road.",
        "A single boda boda shed is marked in the south-east, which is a sign of how people move in and out of the settlement.",
        "Few culverts for such a long road suggest drainage is limited, so flooding at the low points is a risk.",
      ] },
      { heading: "How it can be used", text: "Together the layers give a complete picture of services in the settlement. County planners can see where roads, power, sewer and drainage are present or missing, rank areas for upgrading, and plan services with real counts rather than guesses. The same data feeds directly into a land information system." },
    ],
  },
  {
    id: "lis", title: "Web-Based Land Information System", tag: "Web", image: img("lis.jpg"),
    summary: "A web-based land information system for viewing parcels, querying ownership and land use, and mapping utilities.",
    details: [
      { heading: "About this system", text: [
        "A land information system (LIS) keeps land records and their locations in one place. This web version lets a user open a map of plots, click one, and read everything recorded about it. It replaces paper registers and separate spreadsheets with a single searchable map.",
        "The map is built with Leaflet over OpenStreetMap, with buttons to load and view parcels and to select parcels by attribute."] },
      { heading: "What the screen shows", items: [
        "Parcels are colour-coded by land use: for example residential, commercial, mixed use and public purpose each have their own colour.",
        "The selected parcel is outlined in red, and a Parcel Properties panel lists its plot number, owner, area in hectares, land use, settlement and registration details.",
        "A bar chart counts parcels by land use, where residential is by far the largest group, followed by mixed use and commercial. A pie chart shows the share of total area by land use.",
      ] },
      { heading: "How it can be used", text: "County and planning offices can look up a plot in seconds, filter parcels by land use, and see how land is being used across a settlement. The parcel data can be extended with utility layers, as in the slums mapping project, to show where services are present or missing." },
    ],
  },
  {
    id: "georef", title: "Georeferencing Kenya Towns", tag: "Web", image: img("georef.jpg"),
    summary: "A web tool that turns a pair of coordinates into the nearest Kenyan town and shows it on a map.",
    details: [
      { heading: "About this tool", text: [
        "This is a small web application that does reverse georeferencing. A user enters a latitude and a longitude, presses Get Town Name, and the tool returns the name of the town at that location and drops a marker on an interactive map.",
        "In the example shown, the coordinates -0.4201 and 36.9476 return Nyeri, and a pin with a pop-up labelled with the town appears on the map in the right place."] },
      { heading: "How it works", items: ["Takes decimal-degree latitude and longitude as input", "Matches the point to a town", "Shows the result as text and as a labelled marker on the map", "Runs in the browser, so no install is needed"] },
      { heading: "How it can be used", text: "It is useful for quickly identifying where a field coordinate is, for teaching how coordinates relate to places, and as a base for larger location lookup tools." },
    ],
  },
  {
    id: "chm", title: "Drone Data: Canopy Height Model", tag: "Remote Sensing", image: img("chm.jpg"),
    summary: "A canopy height model made from drone surveys, showing the height of trees above the ground.",
    details: [
      { heading: "About this project", text: [
        "A canopy height model (CHM) is a raster that shows how tall everything above the ground is. It is made by taking a digital surface model (DSM), which includes tree tops and buildings, and subtracting a digital terrain model (DTM), which is the bare ground. What is left is height above ground.",
        "This one was produced in ArcMap from drone data. The project holds the DSM and a ground elevation model as inputs, and the CHM as the result."] },
      { heading: "What the map shows", items: [
        "Most of the surveyed area is green, which means low height such as crops, grass and open ground.",
        "The red patches are the tallest features, found in clusters and lines, and show where trees stand. The legend runs from 0 to about 70 units, and the extreme top values should be treated carefully since they can come from noise in the surface model.",
        "The shape of the survey block is irregular because it follows the drone’s flight coverage.",
      ] },
      { heading: "How it can be used", text: "CHMs support tree counts, biomass and carbon estimates, forest and plantation inventory, and checking the growth of planted trees over time." },
    ],
  },
  {
    id: "lulc-kisii", title: "Land Use and Land Cover Change: Kisii County (1994–2024)", tag: "Remote Sensing", image: img("lulc-kisii.jpg"),
    summary: "Four dates of land cover classification showing how development has spread across Kisii over thirty years.",
    details: [
      { heading: "About this map", text: [
        "This layout compares land use and land cover at four dates: 1994, 2004, 2014 and 2024. Each panel uses the same three classes: developed (dark red), forest (green) and planted or cultivated land (yellow). Placing the four dates side by side makes change over 30 years easy to see.",
        "The data is in WGS 1984 UTM Zone 36N, and the 20 km scale bar applies to all panels."] },
      { heading: "What the maps show", items: [
        "1994: the area is dominated by yellow cultivated land, with forest in patches and only small spots of development.",
        "2004: cultivated land still dominates. Development begins to appear along the western edge and in small clusters.",
        "2014: a clear change. Developed land now forms a wide north-south corridor through the centre and spreads into many small clusters, and the forest remaining is mostly in the east and south-east.",
        "2024: development is now extensive and almost continuous through the middle of the area, and forest is more fragmented, as patches in the centre and north.",
        "A few striping artefacts from the source imagery remain, mostly in the 2004 panel, and forest shifts position between dates, so some of the change comes from classification differences as well as real land change.",
      ] },
      { heading: "How it can be used", text: "The change record shows where settlement is growing over farmland and forest, which helps with land use planning, forest protection and forecasting where growth will go next." },
    ],
  },
];

export const skills: { title: string; tools: string[]; skills: string[] }[] = [
  { title: "GIS & Spatial Analysis", tools: ["ArcGIS Pro", "ArcMap 10.8.2", "QGIS", "ArcPy"], skills: ["Spatial Analysis & Geoprocessing", "Cartography & Thematic Mapping", "Geospatial Data Quality Assurance"] },
  { title: "Remote Sensing & Earth Observation", tools: ["Google Earth Engine", "ERDAS IMAGINE", "ENVI"], skills: ["Satellite Image Processing", "Land Use/Land Cover (LULC) Classification", "Change Detection & Environmental Monitoring", "Vegetation and Environmental Indices (NDVI, NDWI, BSI)"] },
  { title: "Drone Mapping & Photogrammetry", tools: ["Agisoft Metashape"], skills: ["Drone Image Processing", "Photogrammetric Processing", "Orthomosaic Generation", "Digital Surface Models (DSM)", "Digital Terrain Models (DTM)", "Point Cloud Generation", "3D Reconstruction"] },
  { title: "CAD & Engineering Mapping", tools: ["Autodesk Civil 3D", "AutoCAD"], skills: ["Engineering Drawings & Geospatial Design", "Terrain and Elevation Data Visualization"] },
  { title: "Programming & Data Analysis", tools: ["Python", "Pandas & NumPy", "Jupyter Notebook", "Google Colab"], skills: ["Geospatial Data Analysis", "GIS Workflow Automation"] },
  { title: "Spatial Databases & Data Management", tools: ["PostgreSQL", "PostGIS", "pgAdmin"], skills: ["Geodatabase Management", "Spatial SQL & Data Validation"] },
  { title: "Web GIS & Field Data Collection", tools: ["ArcGIS Online", "ArcGIS Survey123", "ArcGIS Dashboards", "ArcGIS Instant Apps"], skills: ["GPS Data Collection & Ground Truthing", "Field Data Management", "Interactive Web Mapping"] },
  { title: "Data Visualization & Reporting", tools: ["Microsoft Excel"], skills: ["Thematic Maps & Statistical Charts", "Spatial Data Visualization", "Technical Reporting & Presentation"] },
];

export const posts = [
  { id: "drones", title: "The Role of Drones in Modern Agriculture", image: img("blog-drones.jpg"),
    intro: "Drones are UAVs with cameras, sensors or spraying systems that help farmers monitor and manage fields quickly.",
    points: ["Crop monitoring and early detection of pests, disease and nutrient stress", "Precision irrigation, fertilising and spraying", "Field mapping and 3D modelling", "Livestock monitoring", "Challenges: cost, regulation, skills and weather"] },
  { id: "ai-tea", title: "The Role of AI in Urban Tea Farming", image: img("blog-ai.jpg"),
    intro: "AI sensors, precision agriculture and robotics are making small-scale urban tea production efficient and sustainable.",
    points: ["Real-time crop stress, pest and disease detection", "Smart irrigation and water management", "Yield prediction and planning", "Automated crop care and supply chain optimisation", "Challenges: cost, technical skills and infrastructure"] },
  { id: "gis", title: "GIS in Land and Resource Management", image: img("blog-gis.jpg"),
    intro: "GIS captures, stores, analyses and displays spatial data, connecting information to location.",
    points: ["Urban planning and infrastructure", "Environmental monitoring: deforestation, pollution, land degradation", "Disaster management: floods, landslides, fire risk", "Agriculture and food security", "Resource exploration and conservation"] },
  { id: "rs-crops", title: "Remote Sensing for Monitoring Crop Health", image: img("blog-crop.jpg"),
    intro: "Satellites, drones and aircraft measure crop growth, stress and nutrients without physical contact.",
    points: ["Vegetation indices such as NDVI measure plant vigour", "Early detection of pest, nutrient and water stress", "Thermal imaging for irrigation management", "Growth and yield estimation", "Challenges: cloud cover, cost and expertise"] },
];
