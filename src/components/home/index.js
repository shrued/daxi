import React from "react";
import { CloudWave, Placard, Tenets, WaveContent } from "./home";

export default function Home() {
  return (
    <>
      <CloudWave>
        <div>
          <WaveContent>Go easy on your mind.</WaveContent>
          <div id="wave">
            <svg width="100%" height="150px" fill="none">
              <path fill="white">
                <animate
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d"
                  dur="10s"
                  values="
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </CloudWave>
      <Placard>Get and stay motivated using Daxi.</Placard>
      <Tenets>
        <div class="cards">
          <div class="card content">
            <div class="card-content">
              <div class="card-img">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="Mood Tracking Board"
                />
              </div>
              <div class="card-label">Mood Tracking Board</div>
              <div class="card-title">
                Record your mood everyday to get a monthly report and monitor
                your progress.
              </div>
            </div>
          </div>
          <div class="card content">
            <div class="card-content">
              <div class="card-img">
                <img
                  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt="Reflection"
                />
              </div>
              <div class="card-label">Reflection</div>
              <div class="card-title">
                Record one question everyday. One year later, you will be asked
                the same question for self-reflection.
              </div>
            </div>
          </div>
          <div class="card content">
            <div class="card-content">
              <div class="card-img">
                <img
                  src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                  alt="Mood Path"
                />
              </div>
              <div class="card-label">Mood Path</div>
              <div class="card-title">
                Log your mental health and mood by answering questions about
                your emotional well-being.
              </div>
            </div>
          </div>
          <div class="card form">
            <div class="form-title">Sign Up</div>
          </div>
        </div>
      </Tenets>
    </>
  );
}
