# Load tests results
with api with postgres databases without indexing.
600 virtual users in 1 minute


```✗ login is status 200
↳  99% — ✓ 3325 / ✗ 14
✗ login is access token present
↳  99% — ✓ 3325 / ✗ 14
✓ search is status 200
✓ getProduct is status 200
✓ putToCard is status 200
✓ putToCard is product in card
✓ getCard is status 200
✓ getCard is product in card
checks.........................: 99.89% ✓ 26600      ✗ 28   
data_received..................: 1.3 GB 13 MB/s
data_sent......................: 4.8 MB 50 kB/s
group_duration.................: avg=5.96s    min=695.52ms med=4.7s     max=24.66s p(90)=13.64s  p(95)=16.15s  
http_req_blocked...............: avg=46.71ms  min=0s       med=14.83µs  max=3.74s  p(90)=52.12µs p(95)=204.57ms
http_req_connecting............: avg=41.51ms  min=0s       med=0s       max=2.64s  p(90)=0s      p(95)=119.32ms
http_req_duration..............: avg=632.19ms min=0s       med=440.6ms  max=8.73s  p(90)=1.43s   p(95)=1.83s   
{ expected_response:true }...: avg=631.71ms min=346.5µs  med=440.3ms  max=8.73s  p(90)=1.43s   p(95)=1.83s   
http_req_failed................: 0.10%  ✓ 18         ✗ 16625
http_req_receiving.............: avg=23.96ms  min=0s       med=161.33µs max=4.2s   p(90)=1.68ms  p(95)=10.89ms
http_req_sending...............: avg=29.43ms  min=0s       med=69.12µs  max=7.66s  p(90)=1.84ms  p(95)=150.66ms
http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s      
http_req_waiting...............: avg=578.78ms min=0s       med=420.97ms max=4.2s   p(90)=1.27s   p(95)=1.62s   
http_reqs......................: 16643  173.374749/s
iteration_duration.............: avg=5.98s    min=695.61ms med=4.7s     max=30.03s p(90)=13.66s  p(95)=16.21s  
iterations.....................: 3339   34.783289/s
vus............................: 0      min=0        max=567
vus_max........................: 600    min=600      max=600```