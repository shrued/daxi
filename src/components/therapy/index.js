import React from "react";
import { RightOutlined } from "@ant-design/icons";
import {
  Container,
  Counseling,
  CounselingCard,
  SideCard,
  SideImage,
  SideName,
  SideText,
  SubContent,
  SubHeading,
  SubTitle,
  Title,
} from "./therapy";

import talkspace from "../../images/talkspace.png";
import betterhelp from "../../images/betterhelp.png";
import onther from "../../images/onther.png";
import amwell from "../../images/amwell.png";
import mdlive from "../../images/mdlive.png";
import sevencups from "../../images/7cups.png";
import regain from "../../images/regain.png";
import teencoun from "../../images/teencoun.png";
import pride from "../../images/pride.png";
import ondemand from "../../images/ondemand.png";

export default function Therapy() {
  return (
    <Container>
      <Title>Help is available</Title>
      <SubTitle>
        Suicidal thoughts can be complex, frightening and confusing.
      </SubTitle>
      <Title>9152987821 - iCall</Title>
      <SubHeading>I want to die. How will talking help me?</SubHeading>
      <SubContent>
        People experienced in listening to people with suicidal thoughts,
        feelings and plans are here to support you: when you’re desperate or on
        edge, they can help you get through that moment and help make sense of
        what you’re feeling. They can also identify other forms of help if you
        think you want it.
      </SubContent>
      <SubHeading>When to get professional help for depression?</SubHeading>
      <SubContent>
        If you’ve taken self-help steps and made positive lifestyle changes and
        still find your depression getting worse, seek professional help.
        Needing additional help doesn’t mean you’re weak. Sometimes the negative
        thinking in depression can make you feel like you’re a lost cause, but
        depression can be treated and you can feel better! Don’t forget about
        these self-help tips, though. Even if you’re receiving professional
        help, these tips can be part of your treatment plan, speeding your
        recovery and preventing depression from returning.
      </SubContent>
      <Counseling>
        <CounselingCard>
          <SideName
            href="https://act.healthline.com/confirm_linkout_redirect.aspx?o=1829&lp=466&g=4&link=1&tc=120396&subid=talkspace_toponlinetherapy_textlink_1870&subid2=/health/our-top-10-online-therapy-picks&correlationId=035b06bc-0910-41e2-bddc-1f2e41ad4bef"
            target="_blank"
            rel="noreferrer"
          >
            Talkspace
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={talkspace} />
            <SideText>
              With over 3,000 licensed therapists and multiple subscription
              plans, Talkspace takes the spot for best overall online therapy.
              After signing up, you’ll complete an assessment and choose your
              payment plan. Then a consultation therapist will match you with
              several therapists and you’ll choose the one that fits your needs.
              You’ll begin working with them within a few days.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://activation.healthline.com/api/member-offers/2168/redirect?lp=328&tc=120226&subid=betterhelp_toponlinetherapy_textlink_1859&subid2=/health/our-top-10-online-therapy-picks&correlationId=5db28de4-2a94-484c-9861-945b2e47d0c2"
            target="_blank"
            rel="noreferrer"
          >
            BetterHelp
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={betterhelp} />
            <SideText>
              BetterHelp has access to over 12,000 licensed, accredited, and
              experienced counselors. The company excels at matching therapists
              to your individual needs and preferences.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://activation.healthline.com/api/member-offers/4756/redirect?lp=328&tc=120226&subid2=/health/our-top-10-online-therapy-picks&subid=onlinetherapy_hl_toponlinetherapy_textlink_5274&correlationId=e5554191-8dcb-48dc-9381-858c08bd3730"
            target="_blank"
            rel="noreferrer"
          >
            Online-Therapy.com
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={onther} />
            <SideText>
              Online-Therapy.com bases its entire operation on cognitive
              behavioral therapy (CBT), which is a top pick when treating a
              variety of mental health conditions. Online-Therapy.com uses a
              toolbox of resources including worksheets, an online journal, a
              30-minute weekly live chat with your therapist, and messaging.
              Some users express concern about therapists only being available
              Monday through Friday for 8 hours a day, compared to other sites
              that offer 24/7 support.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://amwell.com/cm/?correlationId=662c5b08-83f5-4d53-ab05-9c0c78fcc41e"
            target="_blank"
            rel="noreferrer"
          >
            Amwell
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={amwell} />
            <SideText>
              If you’re looking for an online telemedicine platform that offers
              care for physical and psychological health, consider Amwell. With
              online doctor or therapist visits available 24/7, Amwell is a
              great site for one-stop shopping. Here’s how it works: Create an
              account, choose the doctor or therapist that works best for you,
              then schedule a visit via their web-based or mobile app program.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://www.mdlive.com/psychiatry?correlationId=54df0f77-339e-46ce-901b-9501724e715f"
            target="_blank"
            rel="noreferrer"
          >
            MDLive
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={mdlive} />
            <SideText>
              MDLive, a comprehensive telemedicine platform, has a division
              specifically for psychiatry services that offers both counseling
              and prescription management with a board certified psychiatrist.
              It takes about 15 minutes to set up an account with MDLive. Once
              registered, you can search through their network of psychiatrists
              and choose the one that’s right for you. When you’re ready to
              schedule an appointment, you can choose between secure online
              video, phone, or the MDLive app.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://www.7cups.com/"
            target="_blank"
            rel="noreferrer"
          >
            7 cups
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={sevencups} />
            <SideText>
              Affordable online therapy, free 24/7 emotional support, and chat
              rooms with people who understand what you’re going through make 7
              Cups one of the largest emotional support systems. Online therapy
              and counseling with licensed therapists are $150 per month —
              significantly less than other online therapy platforms. Plus, 7
              Cups offers emotional support and access to speak to a trained
              volunteer (not a licensed counselor) at no charge. This option is
              appropriate for support and to help connect you with services.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://activation.healthline.com/api/member-offers/2170/redirect?lp=328&tc=120226&subid2=/health/our-top-10-online-therapy-picks&subid=betterhelp_regain_toponlinetherapy_textlink_1871&correlationId=9e03e18d-3455-4684-a236-e7fcd86257d4"
            target="_blank"
            rel="noreferrer"
          >
            ReGain
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={regain} />
            <SideText>
              When you need couples counseling, you want a licensed therapist
              that’s trained in dealing with relationship issues, which is why
              ReGain is the top pick for best online therapy for couples. All
              therapists are licensed and include accredited psychologists,
              licensed marriage and family therapists, licensed clinical social
              workers, or licensed professional counselors.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://activation.healthline.com/api/member-offers/2171/redirect?lp=328&tc=120226&subid2=/health/our-top-10-online-therapy-picks&subid=betterhelp_teencounseling_toponlinetherapy_textlink_1873&correlationId=42462f6c-3dab-482c-ae11-10731bd55851"
            target="_blank"
            rel="noreferrer"
          >
            Teen Counseling
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={teencoun} />
            <SideText>
              Teen Counseling, an online platform just for teens ages 13 to 19,
              offers live chats, phone calls, video conferencing, and messaging
              in a “private” counseling room with a licensed therapist. Although
              parents don’t have access to this room, a therapist must report
              abuse and if the teen is a danger to themselves or others. Parents
              can complete the registration process, which includes being
              matched with a licensed counselor. Your teen will receive a code
              inviting them to join their private room.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://activation.healthline.com/api/member-offers/2169/redirect?lp=328&tc=120226&subid2=/health/our-top-10-online-therapy-picks&subid=betterhelp_pridecounseling_toponlinetherapy_textlink_1872&correlationId=53a04329-2c3e-4b9a-a500-d137ad78eae4"
            target="_blank"
            rel="noreferrer"
          >
            Pride Counseling
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={pride} />
            <SideText>
              At Pride Counseling, therapists recognize that the LGBTQ community
              deals with mental health issues at a disproportionately higher
              rate and want to make help accessable for everyone. After you sign
              up, you’ll be matched with a counselor who fits your objectives,
              preferences, and the type of issues you’re dealing with. All their
              counselors specialize in the LGBTQ community, but different
              counselors have different approaches and areas of focus.
            </SideText>
          </SideCard>
        </CounselingCard>
        <CounselingCard>
          <SideName
            href="https://www.doctorondemand.com/what-we-treat/behavioral-health?correlationId=b0e016b3-a9ff-4610-93be-f18ed4aa94d9"
            target="_blank"
            rel="noreferrer"
          >
            Doctor On Demand
            <RightOutlined
              style={{
                fontSize: "15px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </SideName>
          <SideCard>
            <SideImage src={ondemand} />
            <SideText>
              Not sure you want to commit to a subscription plan? No problem.
              Doctor On Demand offers single video chat sessions with trained
              mental health professionals who are licensed psychiatrists and
              therapists. After an initial assessment, you can browse their
              selection of psychiatrists and therapists and book an appointment.
              If medication is part of your therapy, a psychiatrist can order
              electronic prescriptions to the pharmacy of your choice. They also
              have appointments available with medical doctors for other
              physical conditions.
            </SideText>
          </SideCard>
        </CounselingCard>
      </Counseling>
      <SubHeading>Benefits of online therapy</SubHeading>
      <SubContent>
        Like in-person therapy, online therapy is a counseling session with a
        licensed therapist or psychiatrist, but instead of meeting in an office,
        your sessions take place at home. How your therapist leads a meeting is
        up to you, with the most common forms of delivery being live videos,
        phone calls, and messaging. And the best part? Many providers are
        available morning, afternoon, or night, and on weekends, making therapy
        more accessible than ever. For some people, this method of counseling
        may take some time to get used to. But for others, virtual visits will
        be the reason they start and stick with therapy. If you already have a
        therapist that offers online counseling, you’re set. But if your
        counselor doesn’t offer virtual sessions or you’re new to therapy, there
        are plenty of online providers and platforms available.
      </SubContent>
    </Container>
  );
}
