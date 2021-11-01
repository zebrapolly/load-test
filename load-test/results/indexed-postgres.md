# Load tests results
with api with postgres databases without indexing.
600 virtual users in 1 minute

```
k6_1        |
k6_1        |      █ search and put to a card
k6_1        |
k6_1        |        ✗ login is status 200
k6_1        |         ↳  99% — ✓ 3601 / ✗ 8
k6_1        |        ✗ login is access token present
k6_1        |         ↳  99% — ✓ 3601 / ✗ 8
k6_1        |        ✓ search is status 200
k6_1        |        ✓ getProduct is status 200
k6_1        |        ✗ putToCard is status 200
k6_1        |         ↳  99% — ✓ 3600 / ✗ 1
k6_1        |        ✗ putToCard is product in card
k6_1        |         ↳  99% — ✓ 3600 / ✗ 1
k6_1        |        ✓ getCard is status 200
k6_1        |        ✓ getCard is product in card
k6_1        |
k6_1        |      checks.........................: 99.93% ✓ 28804      ✗ 18   
k6_1        |      data_received..................: 1.6 GB 15 MB/s
k6_1        |      data_sent......................: 5.5 MB 54 kB/s
k6_1        |      group_duration.................: avg=6s       min=397.45ms med=4.84s    max=23.84s p(90)=12.61s p(95)=15.85s  
k6_1        |      http_req_blocked...............: avg=37.75ms  min=0s       med=13.54µs  max=3.52s  p(90)=36µs   p(95)=68.84ms
k6_1        |      http_req_connecting............: avg=32.79ms  min=0s       med=0s       max=3.43s  p(90)=0s     p(95)=209.02µs
k6_1        |      http_req_duration..............: avg=640.31ms min=0s       med=503.59ms max=6.84s  p(90)=1.43s  p(95)=1.71s   
k6_1        |        { expected_response:true }...: avg=639.71ms min=412.75µs med=503.4ms  max=6.21s  p(90)=1.43s  p(95)=1.71s   
k6_1        |      http_req_failed................: 0.07%  ✓ 13         ✗ 18003
k6_1        |      http_req_receiving.............: avg=16.21ms  min=0s       med=167.77µs max=3.44s  p(90)=1.49ms p(95)=7.65ms  
k6_1        |      http_req_sending...............: avg=30.64ms  min=0s       med=65.08µs  max=6.84s  p(90)=1.23ms p(95)=153.6ms
k6_1        |      http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s     p(95)=0s      
k6_1        |      http_req_waiting...............: avg=593.45ms min=0s       med=480.26ms max=3.08s  p(90)=1.32s  p(95)=1.6s    
k6_1        |      http_reqs......................: 18016  178.728145/s
k6_1        |      iteration_duration.............: avg=6.02s    min=1.01s    med=4.86s    max=30.04s p(90)=12.64s p(95)=15.86s  
k6_1        |      iterations.....................: 3609   35.803168/s
k6_1        |      vus............................: 146    min=0        max=589
k6_1        |      vus_max........................: 600    min=600      max=600
```