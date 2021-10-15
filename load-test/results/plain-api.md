# Load tests results
with api without databases and searching operations pass within js engine.
600 virtual users in 1 minute

       ✓ login is status 200
       ✓ login is access token present
       ✓ search is status 200
       ✓ getProduct is status 200
       ✓ putToCard is status 200
       ✓ putToCard is product in card
       ✓ getCard is status 200
       ✓ getCard is product in card

     checks.........................: 100.00% ✓ 52928      ✗ 0    
     data_received..................: 2.3 GB  36 MB/s
     data_sent......................: 12 MB   178 kB/s
     group_duration.................: avg=2.91s    min=1s    med=2.31s    max=10.64s   p(90)=6.06s    p(95)=7.45s   
     http_req_blocked...............: avg=7.75µs   min=0s    med=2µs      max=1.27ms   p(90)=4µs      p(95)=5µs     
     http_req_connecting............: avg=4.55µs   min=0s    med=0s       max=925µs    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=383ms    min=776µs med=186.55ms max=8.51s    p(90)=581.87ms p(95)=1.51s   
       { expected_response:true }...: avg=383ms    min=776µs med=186.55ms max=8.51s    p(90)=581.87ms p(95)=1.51s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 33080
     http_req_receiving.............: avg=173.24ms min=6µs   med=29µs     max=8.21s    p(90)=93.4ms   p(95)=727.47ms
     http_req_sending...............: avg=55.51µs  min=2µs   med=9µs      max=247.73ms p(90)=22µs     p(95)=29µs    
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=209.7ms  min=741µs med=168.43ms max=2s       p(90)=424.69ms p(95)=560.68ms
     http_reqs......................: 33080   500.959729/s
     iteration_duration.............: avg=2.91s    min=1s    med=2.31s    max=10.64s   p(90)=6.06s    p(95)=7.45s   
     iterations.....................: 6616    100.191946/s
     vus............................: 1       min=1        max=600
     vus_max........................: 600     min=600      max=600

1000 virtual users in 1 minute

       ✗ login is status 200
        ↳  98% — ✓ 6380 / ✗ 73
       ✗ login is access token present
        ↳  98% — ✓ 6380 / ✗ 73
       ✗ search is status 200
        ↳  99% — ✓ 6363 / ✗ 17
       ✗ getProduct is status 200
        ↳  99% — ✓ 6316 / ✗ 47
       ✗ putToCard is status 200
        ↳  98% — ✓ 6278 / ✗ 85
       ✗ putToCard is product in card
        ↳  98% — ✓ 6278 / ✗ 85
       ✗ getCard is status 200
        ↳  99% — ✓ 6274 / ✗ 4
       ✗ getCard is product in card
        ↳  99% — ✓ 6274 / ✗ 4

     checks.........................: 99.23% ✓ 50543      ✗ 388   
     data_received..................: 2.3 GB 30 MB/s
     data_sent......................: 12 MB  148 kB/s
     group_duration.................: avg=5.99s    min=1s    med=3.82s    max=33.26s   p(90)=14.6s   p(95)=20.01s 
     http_req_blocked...............: avg=665.24µs min=0s    med=2µs      max=220.95ms p(90)=5µs     p(95)=14.19µs
     http_req_connecting............: avg=167.45µs min=0s    med=0s       max=114.26ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.01s    min=717µs med=356.3ms  max=31.51s   p(90)=1.4s    p(95)=4.87s  
       { expected_response:true }...: avg=986.68ms min=717µs med=354.26ms max=31.51s   p(90)=1.36s   p(95)=3.88s  
     http_req_failed................: 0.70%  ✓ 226        ✗ 31611 
     http_req_receiving.............: avg=516.39ms min=0s    med=27µs     max=30.93s   p(90)=98.42ms p(95)=1.97s  
     http_req_sending...............: avg=38.48ms  min=2µs   med=10µs     max=6.84s    p(90)=24µs    p(95)=37µs   
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=460.84ms min=23µs  med=322.34ms max=7.92s    p(90)=812.9ms p(95)=1.23s  
     http_reqs......................: 31837  411.611916/s
     iteration_duration.............: avg=5.99s    min=1s    med=3.82s    max=33.26s   p(90)=14.6s   p(95)=20.01s 
     iterations.....................: 6453   83.429082/s
     vus............................: 1      min=1        max=1000
     vus_max........................: 1000   min=1000     max=1000

In this test we can see that not every request passed.
This happened because of "reset requests by peer".