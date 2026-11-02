/** Source: Swthastu, The Book of Rituals, version 3. Practice instructions and care notes retain the source scope.
 * Possible takeaways are editorial descriptions of the practice, not promises of health outcomes. */
export type Ritual = {
  id: string;
  slug: string;
  name: string;
  segment: string;
  segmentSlug: string;
  need: 'Calm' | 'Energy' | 'Nourishment' | 'Connection' | 'Direction';
  purpose: string;
  minutes: number;
  mode: 'Self-guided' | 'Supported practice' | 'Facilitator-led';
  modeDetail: string;
  audience: string;
  setting: string;
  materials: string;
  frequency: string;
  steps: { minutes: number; text: string }[];
  prompt: string;
  carry: string;
  care: string;
  adapt: string;
  immediate: string[];
  continuing: string[];
  image: string;
};

export const rituals: Ritual[] = [
  {
    "id": "R01",
    "name": "Arrival Pause",
    "segment": "Everyday foundations",
    "purpose": "Create a deliberate transition into the present activity.",
    "minutes": 5,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "A safe seated place",
    "materials": "Chair; optional timer",
    "frequency": "At the start of a day or gathering",
    "prompt": "What would make this next moment worthwhile?",
    "steps": [
      {
        "minutes": 1,
        "text": "Sit with support. Look around and identify where you are and what you are about to do."
      },
      {
        "minutes": 1,
        "text": "Notice the chair beneath you and your feet or another comfortable contact point. Let breathing remain natural."
      },
      {
        "minutes": 1,
        "text": "Look at three ordinary objects. Describe their colours silently, without needing to feel differently."
      },
      {
        "minutes": 1,
        "text": "Ask what deserves your attention for the next few minutes. Choose one realistic intention."
      },
      {
        "minutes": 1,
        "text": "Adjust your position, look outward and begin the next activity at a comfortable pace."
      }
    ],
    "carry": "Use the first contact with your chair as tomorrow’s reminder.",
    "care": "If inward attention feels uncomfortable, keep attention on the room.",
    "adapt": "Remain in your usual supported position; no posture needs to be achieved.",
    "segmentSlug": "everyday-foundations",
    "need": "Calm",
    "slug": "arrival-pause",
    "modeDetail": "Self-guided",
    "immediate": [
      "A clear transition into what you are about to do",
      "One realistic intention for the next few minutes"
    ],
    "continuing": [
      "A familiar cue for beginning with attention",
      "More deliberate transitions between ordinary activities"
    ],
    "image": "/images/ritual-r01.webp"
  },
  {
    "id": "R02",
    "name": "Gratitude in Three Lines",
    "segment": "Everyday foundations",
    "purpose": "Notice a specific source of support without denying difficulty.",
    "minutes": 7,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home or office",
    "materials": "Paper and pen",
    "frequency": "Three evenings a week",
    "prompt": "What supported me, even a little?",
    "steps": [
      {
        "minutes": 1,
        "text": "Choose a neutral or comfortable place and write today’s date."
      },
      {
        "minutes": 2,
        "text": "Record one ordinary thing that helped today: a person, a tool, a meal or a moment."
      },
      {
        "minutes": 1,
        "text": "Describe exactly what it made easier. Avoid a general list of everything you should appreciate."
      },
      {
        "minutes": 2,
        "text": "Write one sentence acknowledging something that was hard, then one small act of care available now."
      },
      {
        "minutes": 1,
        "text": "Close the page. Appreciation may coexist with frustration, sadness or uncertainty."
      }
    ],
    "carry": "Notice one practical source of support tomorrow.",
    "care": "Skip gratitude if it creates guilt; record a neutral observation instead.",
    "adapt": "Dictate privately, draw a symbol or use one line rather than three.",
    "segmentSlug": "everyday-foundations",
    "need": "Calm",
    "slug": "gratitude-in-three-lines",
    "modeDetail": "Self-guided",
    "immediate": [
      "A specific reminder of support available to you",
      "Room to acknowledge difficulty alongside appreciation"
    ],
    "continuing": [
      "A more balanced record of everyday experiences",
      "A flexible way to notice support without forced positivity"
    ],
    "image": "/images/ritual-r02.webp"
  },
  {
    "id": "R03",
    "name": "Daily Energy Map",
    "segment": "PranaX",
    "purpose": "Understand your own activity patterns without turning them into a health score.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Desk or quiet room",
    "materials": "Paper and pen",
    "frequency": "Weekly for four weeks",
    "prompt": "Which part of my day most needs a different rhythm?",
    "steps": [
      {
        "minutes": 2,
        "text": "Draw a line from waking to bedtime and mark your main activities from a typical day."
      },
      {
        "minutes": 4,
        "text": "Add times you felt engaged, tired, interrupted or in need of rest. These are observations, not diagnoses."
      },
      {
        "minutes": 3,
        "text": "Circle one pattern you can influence and underline one that needs another person’s support."
      },
      {
        "minutes": 4,
        "text": "Choose one small experiment, such as a protected lunch or a pause between meetings. Name the time and the support needed."
      },
      {
        "minutes": 2,
        "text": "Write a review date in seven days. Keep the map private unless you choose to share a practical request."
      }
    ],
    "carry": "Try one change for seven days, then keep, adapt or stop it.",
    "care": "Persistent or unexplained fatigue deserves professional assessment; this map cannot identify its cause.",
    "adapt": "Use morning, afternoon and evening columns if detailed tracking feels burdensome.",
    "segmentSlug": "pranax",
    "need": "Energy",
    "slug": "daily-energy-map",
    "modeDetail": "Self-guided",
    "immediate": [
      "A simple picture of your daily activity patterns",
      "One manageable adjustment to try"
    ],
    "continuing": [
      "A repeatable way to review activity, rest and interruptions",
      "Clearer practical requests when a change needs support"
    ],
    "image": "/images/ritual-r03.webp"
  },
  {
    "id": "R04",
    "name": "Between Tasks Reset",
    "segment": "PranaX",
    "purpose": "Make space to finish one activity before starting another.",
    "minutes": 6,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Seated at work or home",
    "materials": "None",
    "frequency": "Once or twice on a busy day",
    "prompt": "What can I set down before I begin again?",
    "steps": [
      {
        "minutes": 1,
        "text": "Stop typing or handling materials when it is safe. Save unfinished work."
      },
      {
        "minutes": 1,
        "text": "Write the next action for the task you are leaving so you do not need to hold it in mind."
      },
      {
        "minutes": 2,
        "text": "Rest hands comfortably, release unnecessary effort and look at a stable object. Breathe normally."
      },
      {
        "minutes": 1,
        "text": "Name the task you are moving into and one clear first step."
      },
      {
        "minutes": 1,
        "text": "Begin that step. If interrupted, return to the written cue instead of restarting the whole ritual."
      }
    ],
    "carry": "Put a small pause between two recurring appointments.",
    "care": "Do not practise during driving, machinery use or safety-critical duties.",
    "adapt": "Use a two-minute version: note the next action, look outward and begin.",
    "segmentSlug": "pranax",
    "need": "Energy",
    "slug": "between-tasks-reset",
    "modeDetail": "Self-guided",
    "immediate": [
      "A written next step for the work you are leaving",
      "A clear starting point for the next task"
    ],
    "continuing": [
      "A more deliberate rhythm between recurring activities",
      "A useful return cue when interruptions happen"
    ],
    "image": "/images/ritual-r04.webp"
  },
  {
    "id": "R05",
    "name": "Food and Feeling Journal",
    "segment": "Agni Reset",
    "purpose": "Observe meal circumstances without judging food or diagnosing digestion.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "After a usual meal",
    "materials": "Private notebook",
    "frequency": "Once daily for three days, then review",
    "prompt": "What makes eating more comfortable and practical for me?",
    "steps": [
      {
        "minutes": 1,
        "text": "Record the meal time and the context: rushed, relaxed, alone or with others."
      },
      {
        "minutes": 2,
        "text": "Write what was available and what you chose, using neutral words rather than good or bad labels."
      },
      {
        "minutes": 2,
        "text": "Note your comfort and attention in ordinary language. Record only what is useful to you."
      },
      {
        "minutes": 3,
        "text": "Choose one practical change to the setting or timing that fits your existing care advice and access to food."
      },
      {
        "minutes": 2,
        "text": "Decide when to try it. Stop tracking if it increases worry, restriction or guilt."
      }
    ],
    "carry": "Review the setting and routine, rather than assigning blame to a food.",
    "care": "This is not an allergy test, diagnosis or diet prescription; ongoing symptoms need qualified care.",
    "adapt": "If food tracking is unhelpful, record only whether you had time and a comfortable place to eat.",
    "segmentSlug": "agni-reset",
    "need": "Nourishment",
    "slug": "food-and-feeling-journal",
    "modeDetail": "Self-guided",
    "immediate": [
      "A brief record of the circumstances around meals",
      "A neutral observation without food rules"
    ],
    "continuing": [
      "More awareness of meal timing and setting",
      "Clearer questions to take to a qualified practitioner when needed"
    ],
    "image": "/images/ritual-r05.webp"
  },
  {
    "id": "R06",
    "name": "Lunch Preparation Pause",
    "segment": "Agni Reset",
    "purpose": "Make the next meal easier within your real work schedule.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Kitchen, desk or break space",
    "materials": "Calendar; meal options",
    "frequency": "Before the next working day",
    "prompt": "What would reduce tomorrow’s meal-time friction?",
    "steps": [
      {
        "minutes": 2,
        "text": "Check the next day’s schedule and identify a realistic meal opportunity."
      },
      {
        "minutes": 3,
        "text": "List accessible meal options that fit your preferences, budget and any prescribed dietary guidance."
      },
      {
        "minutes": 3,
        "text": "Arrange the simplest useful support: carry food, plan a purchase or request coverage for a break."
      },
      {
        "minutes": 2,
        "text": "Set a reminder only if helpful. Avoid turning the plan into another performance demand."
      },
      {
        "minutes": 2,
        "text": "Write a fallback option for a disrupted day, then finish planning."
      }
    ],
    "carry": "Try the fallback plan if the preferred one becomes impractical.",
    "care": "Do not delay required food, medicines or prescribed meal timing for a ritual.",
    "adapt": "A caregiver or colleague may help plan access; there is no requirement to prepare food yourself.",
    "segmentSlug": "agni-reset",
    "need": "Nourishment",
    "slug": "lunch-preparation-pause",
    "modeDetail": "Self-guided",
    "immediate": [
      "A workable plan for your next lunch",
      "A fallback option for a busy day"
    ],
    "continuing": [
      "A habit of making room for regular nourishment",
      "Earlier conversations about access, time and practical support"
    ],
    "image": "/images/ritual-r06.webp"
  },
  {
    "id": "R07",
    "name": "Mauna Moments",
    "segment": "Inner Himalaya",
    "purpose": "Explore a short, optional quiet period while staying connected to the room.",
    "minutes": 8,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "A familiar, safe place",
    "materials": "Chair; optional timer",
    "frequency": "Two or three times weekly",
    "prompt": "What did I notice when I stopped filling every moment?",
    "steps": [
      {
        "minutes": 1,
        "text": "Choose an eight-minute window without urgent responsibilities. Decide that you may stop at any time."
      },
      {
        "minutes": 2,
        "text": "Keep eyes open or softly lowered. Notice ordinary sounds without trying to remove them."
      },
      {
        "minutes": 2,
        "text": "Let thoughts come and go. When you notice planning, return to one visible object or sound."
      },
      {
        "minutes": 2,
        "text": "Ask whether quiet feels useful today. Continue, change to gentle observation or finish early."
      },
      {
        "minutes": 1,
        "text": "Look around, name your next activity and rejoin your surroundings."
      }
    ],
    "carry": "Leave one small gap in tomorrow’s schedule.",
    "care": "Silence or meditation may feel unpleasant for some people; stop if distressed.",
    "adapt": "Replace silence with looking at a picture or listening to ordinary room sounds.",
    "segmentSlug": "inner-himalaya",
    "need": "Calm",
    "slug": "mauna-moments",
    "modeDetail": "Self-guided",
    "immediate": [
      "A short experience of quiet on your own terms",
      "A chance to notice whether quiet suits you today"
    ],
    "continuing": [
      "More confidence choosing a pause that feels comfortable",
      "A manageable way to leave space between activities"
    ],
    "image": "/images/ritual-r07.webp"
  },
  {
    "id": "R08",
    "name": "One Window of Attention",
    "segment": "Inner Himalaya",
    "purpose": "Try a manageable period of doing one chosen thing.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Desk or home workspace",
    "materials": "One task; timer",
    "frequency": "Once per working day if useful",
    "prompt": "Which interruption can I reasonably reduce?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a small task that fits ten minutes and identify its first visible action."
      },
      {
        "minutes": 1,
        "text": "Close optional tabs and silence non-essential alerts where your duties permit."
      },
      {
        "minutes": 8,
        "text": "Work on the chosen action. If distracted, note the distraction briefly and return without self-criticism."
      },
      {
        "minutes": 2,
        "text": "Check what moved forward and what remains; task completion is not required."
      },
      {
        "minutes": 2,
        "text": "Write the next step and choose whether to continue or take a normal break."
      }
    ],
    "carry": "Protect one short attention window tomorrow.",
    "care": "Keep essential alerts and accessibility tools active.",
    "adapt": "Use a five-minute work period or a paper task if screens are unsuitable.",
    "segmentSlug": "inner-himalaya",
    "need": "Calm",
    "slug": "one-window-of-attention",
    "modeDetail": "Self-guided",
    "immediate": [
      "A defined window for one chosen task",
      "An observation about what helps your attention"
    ],
    "continuing": [
      "A practical habit of protecting short focus periods",
      "Better-informed adjustments to interruptions and work setup"
    ],
    "image": "/images/ritual-r08.webp"
  },
  {
    "id": "R09",
    "name": "Dinacharya Reflection",
    "segment": "Ayurveda and personal wellbeing",
    "purpose": "Review daily habits through an Ayurveda-informed lens of regularity and personal fit.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home",
    "materials": "Notebook",
    "frequency": "Weekly",
    "prompt": "Which small routine fits my life as it is?",
    "steps": [
      {
        "minutes": 2,
        "text": "Write your usual waking, meals, work, movement and rest times without assessing your body type."
      },
      {
        "minutes": 4,
        "text": "Identify one routine that supports you and one that feels difficult to maintain."
      },
      {
        "minutes": 3,
        "text": "Consider practical constraints: shifts, caregiving, money, access and existing medical guidance."
      },
      {
        "minutes": 4,
        "text": "Choose one modest routine adjustment compatible with those constraints. Do not add herbs, treatments or fasting."
      },
      {
        "minutes": 2,
        "text": "Record a review date and any questions for a qualified practitioner."
      }
    ],
    "carry": "Test one adjustment; do not change prescribed care.",
    "care": "No dosha diagnosis, cleansing, supplements or treatment is instructed here.",
    "adapt": "For variable shifts, plan a sequence of events rather than fixed clock times.",
    "segmentSlug": "ayurveda-and-personal-wellbeing",
    "need": "Nourishment",
    "slug": "dinacharya-reflection",
    "modeDetail": "Self-guided education",
    "immediate": [
      "A view of your current daily sequence",
      "One routine adjustment that respects your existing care"
    ],
    "continuing": [
      "A regular way to review what fits your circumstances",
      "More useful questions about habits and personal preferences"
    ],
    "image": "/images/ritual-r09.webp"
  },
  {
    "id": "R10",
    "name": "Prepare for a Practitioner Conversation",
    "segment": "Ayurveda and personal wellbeing",
    "purpose": "Bring clear goals and questions to a booked professional consultation.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private setting",
    "materials": "Paper; current care information if available",
    "frequency": "Before a consultation",
    "prompt": "What do I need to understand before agreeing?",
    "steps": [
      {
        "minutes": 2,
        "text": "Write your reason for seeking the consultation and what you hope to understand."
      },
      {
        "minutes": 3,
        "text": "List relevant existing care, medicines and allergies accurately for the practitioner, keeping the list private."
      },
      {
        "minutes": 3,
        "text": "Prepare questions about qualifications, proposed options, evidence, costs, risks and alternatives."
      },
      {
        "minutes": 2,
        "text": "Note what you do not want or are unsure about; consent can be declined or revisited."
      },
      {
        "minutes": 2,
        "text": "Plan how to record the advice and coordinate any proposed changes with your treating professionals."
      }
    ],
    "carry": "Ask for clear explanations rather than feeling obliged to purchase a treatment.",
    "care": "This preparation is not a consultation and cannot establish which treatment is suitable.",
    "adapt": "Invite a trusted supporter with your consent; use audio notes privately if easier.",
    "segmentSlug": "ayurveda-and-personal-wellbeing",
    "need": "Nourishment",
    "slug": "prepare-for-a-practitioner-conversation",
    "modeDetail": "Self-guided preparation",
    "immediate": [
      "A concise set of consultation goals and questions",
      "Clarity about what you want explained before deciding"
    ],
    "continuing": [
      "More active participation in professional conversations",
      "A habit of checking scope and choices before committing"
    ],
    "image": "/images/ritual-r10.webp"
  },
  {
    "id": "R11",
    "name": "Future Self Letter",
    "segment": "Young Tapasvi",
    "purpose": "Connect a desired direction with one realistic action.",
    "minutes": 20,
    "mode": "Self-guided",
    "audience": "Adults aged 18 and above",
    "setting": "Private study space",
    "materials": "Paper or private document",
    "frequency": "At the start of a month",
    "prompt": "What kind of person do I want to practise being?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a date three months ahead and write to yourself on that day."
      },
      {
        "minutes": 5,
        "text": "Describe how you would like to behave in learning, work and relationships, without requiring a perfect outcome."
      },
      {
        "minutes": 5,
        "text": "Name two strengths and one support you can use. Include one constraint you need to respect."
      },
      {
        "minutes": 5,
        "text": "Choose a first action that takes less than 20 minutes and schedule it within the next week."
      },
      {
        "minutes": 3,
        "text": "Keep the letter somewhere private and set a monthly review reminder."
      }
    ],
    "carry": "Take the first small action; the letter is a direction, not a prediction.",
    "care": "Do not treat this exercise as proof of career suitability or a guaranteed future.",
    "adapt": "Use a voice note or three drawings instead of a letter.",
    "segmentSlug": "young-tapasvi",
    "need": "Direction",
    "slug": "future-self-letter",
    "modeDetail": "Self-guided",
    "immediate": [
      "Words for a direction that matters to you",
      "One small action you can take next"
    ],
    "continuing": [
      "A flexible reference for reviewing your choices",
      "A more practical link between intention and everyday action"
    ],
    "image": "/images/ritual-r11.webp"
  },
  {
    "id": "R12",
    "name": "Seva in a Small Circle",
    "segment": "Young Tapasvi",
    "purpose": "Practise a useful act of contribution chosen with the recipient.",
    "minutes": 25,
    "mode": "Facilitator-led",
    "audience": "Adult early career groups",
    "setting": "Classroom or office",
    "materials": "Paper; agreed safe task",
    "frequency": "Monthly; delivery of the action is scheduled separately",
    "prompt": "Who benefits, and have we asked what they want?",
    "steps": [
      {
        "minutes": 4,
        "text": "Invite pairs to identify a small need in their immediate community without naming private problems."
      },
      {
        "minutes": 5,
        "text": "Choose an action that is genuinely wanted and ask how the recipient’s consent will be confirmed."
      },
      {
        "minutes": 6,
        "text": "Define the task, roles, time limit and necessary permission. Avoid collecting money or sensitive information."
      },
      {
        "minutes": 6,
        "text": "Rehearse the first conversation and check that no one is being assigned an unsafe or unpaid ongoing duty."
      },
      {
        "minutes": 4,
        "text": "Record who will confirm consent and when the group will review the separately scheduled action."
      }
    ],
    "carry": "Complete only the agreed action after permission, then review what was useful.",
    "care": "The ritual plans a contribution; it does not authorise volunteering with vulnerable people without safeguards.",
    "adapt": "Choose an accessible contribution such as improving a shared resource.",
    "segmentSlug": "young-tapasvi",
    "need": "Direction",
    "slug": "seva-in-a-small-circle",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "A shared contribution chosen with its recipient",
      "A clear plan with permission and responsibilities"
    ],
    "continuing": [
      "More thoughtful habits of asking before helping",
      "A repeatable way to review whether a contribution was useful"
    ],
    "image": "/images/ritual-r12.webp"
  },
  {
    "id": "R13",
    "name": "My Strengths Mandala",
    "segment": "Teen Life Mastery",
    "purpose": "Explore interests and strengths without comparison or grading.",
    "minutes": 20,
    "mode": "Supported practice",
    "audience": "Ages 13 to 19",
    "setting": "Home or supervised learning space",
    "materials": "Paper; coloured pens",
    "frequency": "Monthly",
    "prompt": "What would I like to explore without needing to be the best?",
    "steps": [
      {
        "minutes": 3,
        "text": "A trusted adult explains that sharing is optional and asks whether drawing or writing feels easier."
      },
      {
        "minutes": 4,
        "text": "Draw a circle with four spaces: things I enjoy, things I practise, people who support me and things I want to try."
      },
      {
        "minutes": 5,
        "text": "Add words or pictures. Strengths may include listening, curiosity or helping, not only achievements."
      },
      {
        "minutes": 5,
        "text": "Choose one small activity to explore this week and identify any permission or support needed."
      },
      {
        "minutes": 3,
        "text": "Keep the page private or share one selected part. The adult thanks the young person without scoring it."
      }
    ],
    "carry": "Try one chosen activity for a short period.",
    "care": "No public comparison, forced disclosure or use as a psychological test.",
    "adapt": "Use a list or conversation; do not require drawing or reading aloud.",
    "segmentSlug": "teen-life-mastery",
    "need": "Direction",
    "slug": "my-strengths-mandala",
    "modeDetail": "Supported practice",
    "immediate": [
      "A personal picture of interests and strengths",
      "One activity to explore without comparison"
    ],
    "continuing": [
      "More language for discussing preferences and support",
      "A habit of exploring interests without treating them as fixed labels"
    ],
    "image": "/images/ritual-r13.webp"
  },
  {
    "id": "R14",
    "name": "A Technology Agreement We Can Try",
    "segment": "Teen Life Mastery",
    "purpose": "Create a small, negotiated change in digital habits.",
    "minutes": 25,
    "mode": "Supported practice",
    "audience": "Ages 13 to 19 with caregiver",
    "setting": "A calm family setting",
    "materials": "Paper; calendar",
    "frequency": "Weekly review for two weeks",
    "prompt": "What agreement respects both connection and independence?",
    "steps": [
      {
        "minutes": 4,
        "text": "Each person names one helpful use of technology and one difficulty, without checking anyone’s device."
      },
      {
        "minutes": 5,
        "text": "Listen in turns. The adult summarises the young person’s point before offering a suggestion."
      },
      {
        "minutes": 7,
        "text": "Choose one shared experiment, such as putting optional devices aside for a short family meal. Protect school, safety and accessibility needs."
      },
      {
        "minutes": 5,
        "text": "Agree what adults will do too and what happens if the plan fails. Avoid punishment or secret monitoring."
      },
      {
        "minutes": 4,
        "text": "Write a review date and a way for either person to ask for changes."
      }
    ],
    "carry": "Review the experiment together rather than policing a score.",
    "care": "Protect access to trusted help; the ritual does not replace safeguarding when a child is at risk.",
    "adapt": "Use device settings together only with explanation and age-appropriate agreement.",
    "segmentSlug": "teen-life-mastery",
    "need": "Direction",
    "slug": "a-technology-agreement-we-can-try",
    "modeDetail": "Supported practice",
    "immediate": [
      "One negotiated change in digital habits",
      "A shared understanding of support and access needs"
    ],
    "continuing": [
      "More constructive conversations about technology use",
      "A flexible agreement that can be reviewed together"
    ],
    "image": "/images/ritual-r14.webp"
  },
  {
    "id": "R15",
    "name": "The Paper Mission",
    "segment": "Commando 101",
    "purpose": "Practise planning, communication and adaptation in a low-risk challenge.",
    "minutes": 25,
    "mode": "Facilitator-led",
    "audience": "Adult teams of 4 to 6",
    "setting": "Accessible meeting room",
    "materials": "Paper; tape; stable table",
    "frequency": "Once, then repeat with a new constraint",
    "prompt": "When did we invite a quieter voice into the plan?",
    "steps": [
      {
        "minutes": 4,
        "text": "Explain the task: create a freestanding paper structure on a table. Success is a shared plan and learning, not height."
      },
      {
        "minutes": 4,
        "text": "Agree roles, choose an accessible way for everyone to contribute and make a quick plan."
      },
      {
        "minutes": 8,
        "text": "Build using only paper and tape. Keep all work at table level and avoid sharp tools."
      },
      {
        "minutes": 5,
        "text": "Discuss what helped communication and what made participation harder. Do not rank individuals."
      },
      {
        "minutes": 4,
        "text": "Agree one communication habit to carry into a real team task."
      }
    ],
    "carry": "Use a two-minute planning round before the next team assignment.",
    "care": "No blindfolds, climbing, speed penalties, unsafe objects or physical contact.",
    "adapt": "A participant can plan, describe, observe or record instead of handling materials.",
    "segmentSlug": "commando-101",
    "need": "Connection",
    "slug": "the-paper-mission",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "Experience of planning and adapting as a team",
      "A reflection on how you communicate under a constraint"
    ],
    "continuing": [
      "A practical planning habit for shared assignments",
      "More awareness of different ways to contribute"
    ],
    "image": "/images/ritual-r15.webp"
  },
  {
    "id": "R16",
    "name": "Responsibility Circle",
    "segment": "Commando 101",
    "purpose": "Make ownership and requests for support explicit.",
    "minutes": 20,
    "mode": "Facilitator-led",
    "audience": "Adult teams up to 8",
    "setting": "Meeting room",
    "materials": "Action sheet",
    "frequency": "At project kickoff or weekly review",
    "prompt": "What can I own, and what support must be agreed?",
    "steps": [
      {
        "minutes": 3,
        "text": "Name one real, manageable team task and explain its boundaries."
      },
      {
        "minutes": 5,
        "text": "Each person may name a contribution they can reasonably make; passing is allowed."
      },
      {
        "minutes": 5,
        "text": "Write an owner, first step and date for each agreed action. Check workload rather than allocating silently."
      },
      {
        "minutes": 4,
        "text": "Ask what help, authority or resource is needed and who can provide it."
      },
      {
        "minutes": 3,
        "text": "Read back the agreement and schedule a review, including how to renegotiate early."
      }
    ],
    "carry": "Review actions at the next team meeting.",
    "care": "Do not use the circle for public blame, disciplinary decisions or coerced commitments.",
    "adapt": "Collect written contributions before speaking to support different communication styles.",
    "segmentSlug": "commando-101",
    "need": "Connection",
    "slug": "responsibility-circle",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "Clearer ownership of an agreed action",
      "Space to name support or clarification needed"
    ],
    "continuing": [
      "A more transparent team review routine",
      "Earlier requests for help when commitments need adjustment"
    ],
    "image": "/images/ritual-r16.webp"
  },
  {
    "id": "R17",
    "name": "My Boundary Sentence",
    "segment": "Shakti",
    "purpose": "Prepare a respectful statement about an everyday limit.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adult women",
    "setting": "Private place",
    "materials": "Paper and pen",
    "frequency": "Before a difficult routine conversation",
    "prompt": "Which limit deserves to be stated clearly?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a low-risk situation involving time, availability or responsibilities, rather than immediate danger."
      },
      {
        "minutes": 4,
        "text": "Write what is being requested, what you can offer and what is beyond your present capacity."
      },
      {
        "minutes": 4,
        "text": "Draft a sentence: I can do this; I cannot do that; could we agree this alternative?"
      },
      {
        "minutes": 3,
        "text": "Say the sentence quietly or write it again in your natural voice. Remove unnecessary apologies if they obscure the request."
      },
      {
        "minutes": 2,
        "text": "Choose a safe time and channel, or decide not to use it if the situation needs formal support."
      }
    ],
    "carry": "Try the sentence in an appropriate situation and review the response.",
    "care": "If there is intimidation, abuse or retaliation risk, prioritise safety and qualified support over rehearsal.",
    "adapt": "Practise through writing or with a trusted supporter rather than speaking aloud.",
    "segmentSlug": "shakti",
    "need": "Energy",
    "slug": "my-boundary-sentence",
    "modeDetail": "Self-guided",
    "immediate": [
      "A respectful sentence for an everyday limit",
      "A clearer sense of the request you want to make"
    ],
    "continuing": [
      "More practice expressing workable boundaries",
      "A habit of checking whether a boundary needs support"
    ],
    "image": "/images/ritual-r17.webp"
  },
  {
    "id": "R18",
    "name": "Shakti Listening Circle",
    "segment": "Shakti",
    "purpose": "Offer an opt-in conversation about realistic self-care and support.",
    "minutes": 30,
    "mode": "Facilitator-led",
    "audience": "Adult women; 4 to 6 participants",
    "setting": "Private accessible room",
    "materials": "Seats; optional paper",
    "frequency": "Monthly",
    "prompt": "What support would make this week more manageable?",
    "steps": [
      {
        "minutes": 5,
        "text": "Agree no recording, no unsolicited advice, a right to pass and the practical limits of group confidentiality."
      },
      {
        "minutes": 8,
        "text": "Invite each participant to name a present-day need without recounting painful events. Time is shared fairly."
      },
      {
        "minutes": 7,
        "text": "Reflect on what kinds of support are available; listeners ask permission before responding."
      },
      {
        "minutes": 6,
        "text": "Each person chooses one manageable request or act of care, or chooses to observe."
      },
      {
        "minutes": 4,
        "text": "Close with orientation to the room and information on voluntary follow-up support."
      }
    ],
    "carry": "Follow up only with consent and do not circulate others’ stories.",
    "care": "A group cannot guarantee others’ confidentiality; do not use it for trauma processing or clinical advice.",
    "adapt": "A neutral written prompt may replace speaking; participants can leave and return.",
    "segmentSlug": "shakti",
    "need": "Energy",
    "slug": "shakti-listening-circle",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "A choice to listen or share within clear limits",
      "One realistic source of self-care or support"
    ],
    "continuing": [
      "More familiarity with asking for the support you choose",
      "A considered way to build voluntary, respectful connection"
    ],
    "image": "/images/ritual-r18.webp"
  },
  {
    "id": "R19",
    "name": "Family Listening Turns",
    "segment": "Kutumbh",
    "purpose": "Give each person a clear turn without rushing to solve problems.",
    "minutes": 20,
    "mode": "Supported practice",
    "audience": "Families; children with caregiver support",
    "setting": "Comfortable family space",
    "materials": "Optional talking object",
    "frequency": "Weekly",
    "prompt": "What did I learn when I listened without preparing my reply?",
    "steps": [
      {
        "minutes": 3,
        "text": "Choose a neutral topic, such as one thing that made the week easier. Agree anyone may pass."
      },
      {
        "minutes": 6,
        "text": "Give each person a short turn. Others listen without interruption or correction."
      },
      {
        "minutes": 5,
        "text": "Each listener reflects one thing they heard, checking rather than assuming they understood."
      },
      {
        "minutes": 4,
        "text": "Ask whether there is one small way to support each other during the coming week."
      },
      {
        "minutes": 2,
        "text": "End with thanks for taking part, without requiring affection or agreement."
      }
    ],
    "carry": "Try one agreed act of support before the next gathering.",
    "care": "Do not use this ritual during threats, active abuse or a heated argument.",
    "adapt": "Shorten turns for children; allow pictures, signs or a written answer.",
    "segmentSlug": "kutumbh",
    "need": "Connection",
    "slug": "family-listening-turns",
    "modeDetail": "Supported practice",
    "immediate": [
      "An uninterrupted turn to speak or listen",
      "One small act of support the family can agree on"
    ],
    "continuing": [
      "More practice giving each person a voice",
      "A shared habit of listening before offering solutions"
    ],
    "image": "/images/ritual-r19.webp"
  },
  {
    "id": "R20",
    "name": "One Family Rhythm",
    "segment": "Kutumbh",
    "purpose": "Choose a shared routine small enough to keep.",
    "minutes": 18,
    "mode": "Supported practice",
    "audience": "Families",
    "setting": "Home",
    "materials": "Paper; shared calendar if useful",
    "frequency": "Fortnightly",
    "prompt": "What tiny routine would help us feel more connected?",
    "steps": [
      {
        "minutes": 3,
        "text": "Name one point in the day that regularly feels rushed or disconnected."
      },
      {
        "minutes": 4,
        "text": "Each person suggests one change without blaming another family member."
      },
      {
        "minutes": 5,
        "text": "Choose a ten-minute-or-less shared routine that fits ages, access needs and schedules."
      },
      {
        "minutes": 4,
        "text": "Agree a simple start cue and a fallback for days when someone is unavailable."
      },
      {
        "minutes": 2,
        "text": "Set a seven-day review and make clear that missing a day does not cancel the experiment."
      }
    ],
    "carry": "Review whether the routine helps; simplify it if needed.",
    "care": "No one should carry all the work or be punished for being unavailable.",
    "adapt": "Participation can be by phone or a short message when family members live apart.",
    "segmentSlug": "kutumbh",
    "need": "Connection",
    "slug": "one-family-rhythm",
    "modeDetail": "Supported practice",
    "immediate": [
      "One realistic family routine to try",
      "Clarity about who can contribute and when"
    ],
    "continuing": [
      "A flexible rhythm that can change with circumstances",
      "More explicit conversations about shared responsibility"
    ],
    "image": "/images/ritual-r20.webp"
  },
  {
    "id": "R21",
    "name": "A Story Worth Keeping",
    "segment": "Golden Years",
    "purpose": "Record a chosen memory with the storyteller in control.",
    "minutes": 20,
    "mode": "Supported practice",
    "audience": "Older adults; optional trusted companion",
    "setting": "Quiet familiar place",
    "materials": "Paper or consented audio recorder",
    "frequency": "When wanted, perhaps monthly",
    "prompt": "What part of this story would I like someone to remember?",
    "steps": [
      {
        "minutes": 3,
        "text": "Ask the storyteller what they would enjoy recalling and whether recording is welcome."
      },
      {
        "minutes": 6,
        "text": "Invite a small everyday story: a skill learned, a favourite place or a person who helped."
      },
      {
        "minutes": 5,
        "text": "Listen and ask gentle clarifying questions. Do not correct the person or test their memory."
      },
      {
        "minutes": 4,
        "text": "Ask what, if anything, they want preserved and who may receive it."
      },
      {
        "minutes": 2,
        "text": "Stop recording, thank them and confirm how the story will be stored or deleted."
      }
    ],
    "carry": "Keep only the version and sharing permission the storyteller chooses.",
    "care": "Stop if the memory is distressing; do not press for forgotten or private details.",
    "adapt": "Use photographs already chosen by the person or let them simply enjoy conversation.",
    "segmentSlug": "golden-years",
    "need": "Connection",
    "slug": "a-story-worth-keeping",
    "modeDetail": "Supported practice",
    "immediate": [
      "A chosen memory recorded on your terms",
      "Control over what is kept or shared"
    ],
    "continuing": [
      "A personal collection shaped by your own preferences",
      "More opportunities for chosen companionship and storytelling"
    ],
    "image": "/images/ritual-r21.webp"
  },
  {
    "id": "R22",
    "name": "My Week of Meaning",
    "segment": "Golden Years",
    "purpose": "Plan one enjoyable, accessible connection or activity.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Older adults",
    "setting": "Home",
    "materials": "Paper; calendar",
    "frequency": "Weekly",
    "prompt": "What would make this week feel more like my own?",
    "steps": [
      {
        "minutes": 2,
        "text": "Notice what feels manageable this week, considering energy, access and other commitments."
      },
      {
        "minutes": 4,
        "text": "List one interest, one connection and one ordinary pleasure you would like to make room for."
      },
      {
        "minutes": 4,
        "text": "Choose one activity and identify transport, accessibility or companionship needs."
      },
      {
        "minutes": 3,
        "text": "Ask for practical help if desired and place a flexible time in the week."
      },
      {
        "minutes": 2,
        "text": "Choose an at-home alternative and finish without setting a productivity target."
      }
    ],
    "carry": "Try one activity and review whether it was enjoyable or worth adapting.",
    "care": "Respect the person’s choices; participation is not a test of successful ageing.",
    "adapt": "Use a phone conversation, favourite music or a seated activity if leaving home is difficult.",
    "segmentSlug": "golden-years",
    "need": "Connection",
    "slug": "my-week-of-meaning",
    "modeDetail": "Self-guided or supported",
    "immediate": [
      "One accessible activity or connection to look forward to",
      "A plan that respects your preferences and pace"
    ],
    "continuing": [
      "A flexible way to make room for personally meaningful activities",
      "More clarity about the support that helps you participate"
    ],
    "image": "/images/ritual-r22.webp"
  },
  {
    "id": "R23",
    "name": "Values Compass",
    "segment": "Disha",
    "purpose": "Use one personal value to guide a current choice.",
    "minutes": 18,
    "mode": "Self-guided",
    "audience": "Adult professionals and leaders",
    "setting": "Quiet work area",
    "materials": "Paper",
    "frequency": "At a decision point",
    "prompt": "What action would express my values in this situation?",
    "steps": [
      {
        "minutes": 3,
        "text": "Describe a present decision in one sentence and identify what you can actually influence."
      },
      {
        "minutes": 4,
        "text": "Choose up to three values, such as fairness, learning or responsibility. Define what each means in this situation."
      },
      {
        "minutes": 5,
        "text": "Write two feasible options and consider who may be affected by each."
      },
      {
        "minutes": 4,
        "text": "Select one next step consistent with your values and obligations, including who should be consulted."
      },
      {
        "minutes": 2,
        "text": "Set a review date and acknowledge what remains uncertain."
      }
    ],
    "carry": "Take the next step and review consequences rather than defending the first answer.",
    "care": "Values reflection does not override professional duties, evidence or appropriate advice.",
    "adapt": "Discuss with a trusted peer using anonymised details.",
    "segmentSlug": "disha",
    "need": "Direction",
    "slug": "values-compass",
    "modeDetail": "Self-guided",
    "immediate": [
      "A named value connected to a real decision",
      "A practical next step to consider"
    ],
    "continuing": [
      "A repeatable way to examine choices and consequences",
      "More consistency between chosen values and everyday decisions"
    ],
    "image": "/images/ritual-r23.webp"
  },
  {
    "id": "R24",
    "name": "The Weekly Direction Review",
    "segment": "Disha",
    "purpose": "Choose a realistic priority while making room for necessary support.",
    "minutes": 20,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Desk",
    "materials": "Calendar; task list",
    "frequency": "Weekly",
    "prompt": "What deserves a clear yes, and what needs renegotiation?",
    "steps": [
      {
        "minutes": 3,
        "text": "Review last week without assigning yourself a success or failure label."
      },
      {
        "minutes": 5,
        "text": "Separate essential commitments, optional work and unresolved requests."
      },
      {
        "minutes": 5,
        "text": "Choose one priority for the next week and define a manageable sign of progress."
      },
      {
        "minutes": 4,
        "text": "Decide what to defer, delegate by agreement or clarify. Draft the necessary conversation."
      },
      {
        "minutes": 3,
        "text": "Reserve time for the first action and one review point."
      }
    ],
    "carry": "Use the priority to guide one practical calendar decision.",
    "care": "Do not quietly drop commitments that need discussion with affected people.",
    "adapt": "Use three handwritten lines if a detailed task list increases pressure.",
    "segmentSlug": "disha",
    "need": "Direction",
    "slug": "the-weekly-direction-review",
    "modeDetail": "Self-guided",
    "immediate": [
      "One realistic priority for the coming week",
      "Clarity about what needs discussion or support"
    ],
    "continuing": [
      "A regular review of commitments and capacity",
      "A more deliberate way to make calendar decisions"
    ],
    "image": "/images/ritual-r24.webp"
  },
  {
    "id": "R25",
    "name": "Before I Lead the Meeting",
    "segment": "Lead Well",
    "purpose": "Prepare to listen, clarify and avoid passing on unnecessary pressure.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "People managers",
    "setting": "Before a meeting",
    "materials": "Agenda",
    "frequency": "Before a demanding meeting",
    "prompt": "How can I be clear without making the room less safe to speak in?",
    "steps": [
      {
        "minutes": 2,
        "text": "Identify the purpose of the meeting and what decision actually needs to be made."
      },
      {
        "minutes": 2,
        "text": "Notice your present pace and tone. Adjust your posture and let breathing remain natural."
      },
      {
        "minutes": 2,
        "text": "Write one question that invites useful input, especially from those affected by the decision."
      },
      {
        "minutes": 2,
        "text": "Identify a constraint to explain honestly and a request that can be negotiated."
      },
      {
        "minutes": 2,
        "text": "Choose an opening sentence that states the task clearly and invites clarification."
      }
    ],
    "carry": "Ask the prepared question and allow time for an answer.",
    "care": "This is leadership preparation, not an assessment of colleagues’ mental health.",
    "adapt": "Use a written agenda and asynchronous questions for distributed teams.",
    "segmentSlug": "lead-well",
    "need": "Direction",
    "slug": "before-i-lead-the-meeting",
    "modeDetail": "Self-guided",
    "immediate": [
      "A clear purpose and listening question for a meeting",
      "An opportunity to reconsider unnecessary pressure"
    ],
    "continuing": [
      "More intentional preparation for demanding conversations",
      "A habit of linking personal example with team working practices"
    ],
    "image": "/images/ritual-r25.webp"
  },
  {
    "id": "R26",
    "name": "Team Workload Conversation",
    "segment": "Lead Well",
    "purpose": "Agree one concrete adjustment to work rather than asking people simply to cope.",
    "minutes": 30,
    "mode": "Facilitator-led",
    "audience": "Manager and team up to 8",
    "setting": "Team meeting",
    "materials": "Task board; action sheet",
    "frequency": "Monthly or during a workload change",
    "prompt": "Which part of the work needs to change, and who can authorise it?",
    "steps": [
      {
        "minutes": 5,
        "text": "State the purpose and invite discussion of work processes without personal health disclosure."
      },
      {
        "minutes": 7,
        "text": "List current priorities, deadlines and dependencies; ask which commitments conflict."
      },
      {
        "minutes": 8,
        "text": "Choose one adjustment: clarify scope, sequence tasks, remove a meeting or escalate a resource gap."
      },
      {
        "minutes": 6,
        "text": "Record the decision owner, affected stakeholders and the date by which the change will be confirmed."
      },
      {
        "minutes": 4,
        "text": "Agree how the team can flag an unsustainable load and when the change will be reviewed."
      }
    ],
    "carry": "Review the adjustment within two weeks and escalate unresolved constraints.",
    "care": "Do not collect diagnoses or promise confidentiality beyond organisational reporting duties.",
    "adapt": "Invite written process concerns in advance; suppress identifying details in summaries.",
    "segmentSlug": "lead-well",
    "need": "Direction",
    "slug": "team-workload-conversation",
    "modeDetail": "Facilitator-led or trained manager-led",
    "immediate": [
      "One concrete workload adjustment to discuss",
      "Shared clarity on responsibility and follow-up"
    ],
    "continuing": [
      "A repeatable conversation about how work is organised",
      "Earlier escalation of constraints that a team cannot resolve alone"
    ],
    "image": "/images/ritual-r26.webp"
  },
  {
    "id": "R27",
    "name": "The Listening Exchange",
    "segment": "Conscious relationships",
    "purpose": "Hear one everyday experience without immediately offering a solution.",
    "minutes": 18,
    "mode": "Supported practice",
    "audience": "Consenting adult pairs",
    "setting": "Private comfortable setting",
    "materials": "Timer if helpful",
    "frequency": "Weekly",
    "prompt": "What did I assume before I asked?",
    "steps": [
      {
        "minutes": 3,
        "text": "Choose a neutral topic and agree either person may pause or end the exchange."
      },
      {
        "minutes": 4,
        "text": "Person A describes a current everyday experience; Person B listens without correcting."
      },
      {
        "minutes": 3,
        "text": "Person B summarises and asks whether advice or listening is wanted."
      },
      {
        "minutes": 5,
        "text": "Reverse roles with the same respect and time for clarification."
      },
      {
        "minutes": 3,
        "text": "Each person names one thing they understood and one next step if both want one."
      }
    ],
    "carry": "Ask whether listening or problem solving is wanted in a future conversation.",
    "care": "Do not use this exercise where there is coercion, abuse or immediate danger.",
    "adapt": "Write and exchange short notes if spoken conversation is difficult.",
    "segmentSlug": "conscious-relationships",
    "need": "Connection",
    "slug": "the-listening-exchange",
    "modeDetail": "Supported practice",
    "immediate": [
      "A turn to describe an ordinary experience without interruption",
      "Practice checking whether advice is wanted"
    ],
    "continuing": [
      "More deliberate listening in safe, voluntary relationships",
      "A shared language for requesting attention or practical help"
    ],
    "image": "/images/ritual-r27.webp"
  },
  {
    "id": "R28",
    "name": "Specific Appreciation",
    "segment": "Conscious relationships",
    "purpose": "Express gratitude without creating an obligation to respond.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home or private writing space",
    "materials": "Paper",
    "frequency": "Weekly or when genuine",
    "prompt": "What exactly am I thanking this person for?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a person and one specific action you genuinely appreciated."
      },
      {
        "minutes": 3,
        "text": "Describe the action and its effect on you without exaggerating or comparing people."
      },
      {
        "minutes": 3,
        "text": "Write three sentences: what happened, why it mattered and a simple thank you."
      },
      {
        "minutes": 2,
        "text": "Decide whether sharing is welcome and appropriate. Keeping the note private is also acceptable."
      },
      {
        "minutes": 2,
        "text": "If you share, do not ask for reassurance, repayment or a matching message."
      }
    ],
    "carry": "Notice a future helpful action without keeping a tally.",
    "care": "Do not contact someone who has asked for distance or where contact may be unsafe.",
    "adapt": "Use a brief spoken thank you, accessible message or private reflection.",
    "segmentSlug": "conscious-relationships",
    "need": "Connection",
    "slug": "specific-appreciation",
    "modeDetail": "Self-guided preparation with optional sharing",
    "immediate": [
      "A specific acknowledgement of a helpful action",
      "Choice about whether and how to express it"
    ],
    "continuing": [
      "A habit of noticing contribution without keeping score",
      "More considered appreciation that respects another person's boundaries"
    ],
    "image": "/images/ritual-r28.webp"
  },
  {
    "id": "R29",
    "name": "A Personal Practice Lab",
    "segment": "School of Wellness",
    "purpose": "Try a low-risk habit as an experiment rather than a promise of transformation.",
    "minutes": 20,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home or learning space",
    "materials": "This book; notebook",
    "frequency": "Weekly",
    "prompt": "What fits me well enough to try again?",
    "steps": [
      {
        "minutes": 3,
        "text": "Choose one self-guided ritual from this book appropriate to your circumstances."
      },
      {
        "minutes": 5,
        "text": "Read its care notes, prepare the setting and identify a shorter version you can use."
      },
      {
        "minutes": 6,
        "text": "Try a brief sample at your own pace; the full ritual can be practised separately later."
      },
      {
        "minutes": 4,
        "text": "Record what was manageable, neutral or unhelpful without grading yourself."
      },
      {
        "minutes": 2,
        "text": "Decide whether to practise the full version, adapt it or choose another theme."
      }
    ],
    "carry": "Keep only one experiment active for the coming week.",
    "care": "Do not sample specialist or facilitator-led practices without the stated support.",
    "adapt": "Read and plan without practising if you need time to assess suitability.",
    "segmentSlug": "school-of-wellness",
    "need": "Direction",
    "slug": "a-personal-practice-lab",
    "modeDetail": "Self-guided",
    "immediate": [
      "A low-risk practice chosen as a small experiment",
      "A clear way to notice whether it fits"
    ],
    "continuing": [
      "More confidence keeping, adapting or stopping a practice",
      "A manageable approach to learning one thing at a time"
    ],
    "image": "/images/ritual-r29.webp"
  },
  {
    "id": "R30",
    "name": "Wisdom to Action Circle",
    "segment": "School of Wellness",
    "purpose": "Turn a broad wellbeing idea into a small practical experiment.",
    "minutes": 25,
    "mode": "Facilitator-led",
    "audience": "Adult groups of 4 to 8",
    "setting": "Learning room",
    "materials": "Prompt cards; paper",
    "frequency": "Monthly",
    "prompt": "What would this idea look like in an ordinary day?",
    "steps": [
      {
        "minutes": 4,
        "text": "Introduce one ordinary theme such as rest, attention or listening; invite different viewpoints."
      },
      {
        "minutes": 6,
        "text": "Ask participants to discuss a fictional example rather than disclose private difficulties."
      },
      {
        "minutes": 6,
        "text": "Each person chooses one practical action related to the theme, with a realistic start cue."
      },
      {
        "minutes": 6,
        "text": "Pairs check whether the action is manageable and whether support or permission is needed."
      },
      {
        "minutes": 3,
        "text": "Invite optional sharing of the action only and schedule a brief future review."
      }
    ],
    "carry": "Review the experiment rather than debating who practised most.",
    "care": "Avoid claims that one philosophy or practice is required for everyone.",
    "adapt": "Use silent writing, captions or a written discussion for communication access.",
    "segmentSlug": "school-of-wellness",
    "need": "Direction",
    "slug": "wisdom-to-action-circle",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "One broad idea translated into a realistic experiment",
      "A practical next step chosen without group pressure"
    ],
    "continuing": [
      "More experience applying ideas in ordinary life",
      "A shared habit of reviewing usefulness rather than competing"
    ],
    "image": "/images/ritual-r30.webp"
  },
  {
    "id": "R31",
    "name": "Words I Can Believe",
    "segment": "Affirmations",
    "purpose": "Replace an unrealistic statement with a kind and workable one.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private place",
    "materials": "Paper",
    "frequency": "Two or three times weekly",
    "prompt": "Can I believe this sentence enough to act on it?",
    "steps": [
      {
        "minutes": 2,
        "text": "Write a sentence you wish were true, without requiring yourself to believe it."
      },
      {
        "minutes": 3,
        "text": "Notice any absolute words, such as always or never, that make it feel false."
      },
      {
        "minutes": 3,
        "text": "Rewrite it as a process you can practise: I can ask one question, or I can take one manageable step."
      },
      {
        "minutes": 2,
        "text": "Choose an action that makes the new statement concrete today."
      },
      {
        "minutes": 2,
        "text": "Read it once and begin the action, or revise it if it still feels untrue."
      }
    ],
    "carry": "Keep the wording flexible; the action matters more than repetition.",
    "care": "Do not use affirmations to deny distress, unsafe conditions or a need for care.",
    "adapt": "Use a neutral statement of intention instead of positive language.",
    "segmentSlug": "affirmations",
    "need": "Direction",
    "slug": "words-i-can-believe",
    "modeDetail": "Self-guided",
    "immediate": [
      "A kind statement that feels believable",
      "One action connected to the words you choose"
    ],
    "continuing": [
      "A more flexible way of speaking to yourself",
      "More attention to practical action than compulsory repetition"
    ],
    "image": "/images/ritual-r31.webp"
  },
  {
    "id": "R32",
    "name": "Intention and Evidence",
    "segment": "Affirmations",
    "purpose": "Notice a small action that supports a chosen intention.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Evening reflection",
    "materials": "Notebook",
    "frequency": "Up to three evenings a week",
    "prompt": "What did I do that was consistent with my intention?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose one intention from today, such as being clearer, kinder or more organised."
      },
      {
        "minutes": 3,
        "text": "Identify one small action you actually took. If none comes to mind, write what got in the way."
      },
      {
        "minutes": 2,
        "text": "Describe the action without claiming it proves your worth or predicts the future."
      },
      {
        "minutes": 2,
        "text": "Choose one manageable opportunity to practise again tomorrow."
      },
      {
        "minutes": 1,
        "text": "Close the notebook without requiring a positive mood."
      }
    ],
    "carry": "Recognise effort without turning the journal into a scorecard.",
    "care": "If review becomes self-criticism, stop and use a neutral observation instead.",
    "adapt": "Record one spoken sentence privately rather than writing.",
    "segmentSlug": "affirmations",
    "need": "Direction",
    "slug": "intention-and-evidence",
    "modeDetail": "Self-guided",
    "immediate": [
      "A record of one action linked to your intention",
      "Space to recognise effort without a score"
    ],
    "continuing": [
      "A realistic view of how intentions show up in daily life",
      "A flexible review habit that leaves room for change"
    ],
    "image": "/images/ritual-r32.webp"
  },
  {
    "id": "R33",
    "name": "A Letter I Do Not Send",
    "segment": "Forgiveness and boundaries",
    "purpose": "Give private language to an ordinary hurt without initiating contact.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private place",
    "materials": "Paper; secure storage",
    "frequency": "Occasionally, only when useful",
    "prompt": "What do I need now, regardless of whether I forgive?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a manageable everyday disappointment, not an overwhelming or traumatic memory."
      },
      {
        "minutes": 4,
        "text": "Write what happened and what mattered to you without needing to justify anyone’s behaviour."
      },
      {
        "minutes": 4,
        "text": "Name a boundary or support you would like now. Forgiveness is not required."
      },
      {
        "minutes": 3,
        "text": "Write one safe next step, including choosing no contact or seeking support."
      },
      {
        "minutes": 2,
        "text": "Put the page away or destroy it safely. Look around and return to an ordinary activity."
      }
    ],
    "carry": "Act on the present need rather than repeatedly revisiting the letter.",
    "care": "Do not send the letter as part of this practice; stop if distress rises.",
    "adapt": "Write only a boundary sentence or skip the memory entirely.",
    "segmentSlug": "forgiveness",
    "need": "Connection",
    "slug": "a-letter-i-do-not-send",
    "modeDetail": "Self-guided for low-intensity reflection",
    "immediate": [
      "Private words for a manageable everyday hurt",
      "A present-day need or boundary to consider"
    ],
    "continuing": [
      "More practice recognising what you need now",
      "A clearer separation between reflection and a decision to make contact"
    ],
    "image": "/images/ritual-r33.webp"
  },
  {
    "id": "R34",
    "name": "The Boundary and Choice Map",
    "segment": "Forgiveness and boundaries",
    "purpose": "Separate another person’s actions from the choices available to you.",
    "minutes": 18,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private desk",
    "materials": "Paper",
    "frequency": "When a repeated everyday issue arises",
    "prompt": "Which choice protects what matters to me?",
    "steps": [
      {
        "minutes": 3,
        "text": "Describe the current issue briefly, avoiding detailed retelling of painful events."
      },
      {
        "minutes": 4,
        "text": "Draw two columns: what I can choose and what is outside my control."
      },
      {
        "minutes": 4,
        "text": "List practical choices such as declining, limiting time, asking for clarity or seeking advice."
      },
      {
        "minutes": 5,
        "text": "Select one safe option and identify any support or formal process needed."
      },
      {
        "minutes": 2,
        "text": "Write the first step and permission to change your mind."
      }
    ],
    "carry": "Review whether the boundary is workable and needs support.",
    "care": "Harassment, violence and coercion need appropriate safeguarding or formal channels, not pressure to forgive.",
    "adapt": "Complete this with a qualified professional if the situation is emotionally complex.",
    "segmentSlug": "forgiveness",
    "need": "Connection",
    "slug": "the-boundary-and-choice-map",
    "modeDetail": "Self-guided for everyday situations",
    "immediate": [
      "A distinction between another person's actions and your choices",
      "One workable boundary or support request"
    ],
    "continuing": [
      "A repeatable way to review everyday limits",
      "More clarity about when personal action or formal support is needed"
    ],
    "image": "/images/ritual-r34.webp"
  },
  {
    "id": "R35",
    "name": "A Map of Support",
    "segment": "Living with grief",
    "purpose": "Identify practical and emotional help without needing to tell the whole story.",
    "minutes": 15,
    "mode": "Supported practice",
    "audience": "Adults experiencing loss",
    "setting": "Private setting with a trusted supporter",
    "materials": "Paper; optional contact list",
    "frequency": "As wanted; review when circumstances change",
    "prompt": "What kind of help would make today a little more manageable?",
    "steps": [
      {
        "minutes": 3,
        "text": "Ask whether making a support map feels helpful today. Passing or stopping is welcome."
      },
      {
        "minutes": 4,
        "text": "Write three headings: practical help, companionship and professional support."
      },
      {
        "minutes": 4,
        "text": "Add a person or service under any heading you wish. Empty spaces are information, not failure."
      },
      {
        "minutes": 2,
        "text": "Choose one small request, such as help with a meal, a short call or information about counselling."
      },
      {
        "minutes": 2,
        "text": "Finish with an ordinary comforting activity chosen by the person, without requiring reflection on the loss."
      }
    ],
    "carry": "Make one request only if and when you want to.",
    "care": "Persistent overwhelming distress or difficulty functioning deserves professional support; this is not grief therapy.",
    "adapt": "A supporter may write while the person chooses what to include.",
    "segmentSlug": "grief",
    "need": "Connection",
    "slug": "a-map-of-support",
    "modeDetail": "Supported practice",
    "immediate": [
      "A simple map of possible practical and emotional support",
      "One request you may choose to make"
    ],
    "continuing": [
      "A reference you can update as circumstances change",
      "More language for asking for help without telling the whole story"
    ],
    "image": "/images/ritual-r35.webp"
  },
  {
    "id": "R36",
    "name": "A Memory with Permission",
    "segment": "Living with grief",
    "purpose": "Make room for a chosen memory while keeping the option to stop.",
    "minutes": 12,
    "mode": "Supported practice",
    "audience": "Adults experiencing loss",
    "setting": "Private familiar place",
    "materials": "Optional chosen object; no object required",
    "frequency": "Only when wanted",
    "prompt": "Would I like company, quiet or something practical now?",
    "steps": [
      {
        "minutes": 2,
        "text": "A trusted supporter asks whether remembering feels welcome today; a no ends the practice."
      },
      {
        "minutes": 3,
        "text": "Choose one ordinary memory or a neutral object associated with the person or change."
      },
      {
        "minutes": 3,
        "text": "Share one sentence, sit quietly or write privately. There is no requirement to find meaning."
      },
      {
        "minutes": 2,
        "text": "Decide whether to keep, put away or return the object; let the person choose."
      },
      {
        "minutes": 2,
        "text": "Notice the room and agree what would feel supportive for the next hour."
      }
    ],
    "carry": "Follow the person’s preference rather than asking them to feel better.",
    "care": "Avoid pressured memorial activities and details that feel overwhelming; specialist groups need qualified facilitation.",
    "adapt": "Choose a present-day comfort instead of a memory, with no explanation needed.",
    "segmentSlug": "grief",
    "need": "Connection",
    "slug": "a-memory-with-permission",
    "modeDetail": "Supported practice",
    "immediate": [
      "A chosen way to remember, or permission not to",
      "A clear option to pause or choose present-day comfort"
    ],
    "continuing": [
      "More confidence expressing how you want to be supported",
      "A personal way to revisit memories only when wanted"
    ],
    "image": "/images/ritual-r36.webp"
  },
  {
    "id": "R37",
    "name": "A Small Act of Care",
    "segment": "Self-love in everyday life",
    "purpose": "Choose one practical response to a need you can recognise today.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Any safe quiet place",
    "materials": "Paper optional",
    "frequency": "Daily when useful",
    "prompt": "What would be a respectful response to my present need?",
    "steps": [
      {
        "minutes": 2,
        "text": "Pause and ask what is most noticeable now: tiredness, uncertainty, hunger, isolation or another need."
      },
      {
        "minutes": 2,
        "text": "Name the need in neutral language without deciding whether you deserve care."
      },
      {
        "minutes": 3,
        "text": "List two feasible responses, including asking for help or changing a commitment."
      },
      {
        "minutes": 2,
        "text": "Choose the smallest useful response and decide when to do it."
      },
      {
        "minutes": 1,
        "text": "Return to your day; caring action does not have to change your mood immediately."
      }
    ],
    "carry": "Do the chosen action or revise it when circumstances change.",
    "care": "Follow existing health advice; a ritual must not delay food, medicines, rest or urgent care.",
    "adapt": "Ask a trusted person to help identify practical options.",
    "segmentSlug": "self-love",
    "need": "Nourishment",
    "slug": "a-small-act-of-care",
    "modeDetail": "Self-guided",
    "immediate": [
      "One need you can name today",
      "A manageable act of care that fits your responsibilities"
    ],
    "continuing": [
      "A practical habit of responding to everyday needs",
      "More experience adapting care when circumstances change"
    ],
    "image": "/images/ritual-r37.webp"
  },
  {
    "id": "R38",
    "name": "Permission to Renegotiate",
    "segment": "Self-love in everyday life",
    "purpose": "Make one commitment more realistic without disappearing from it.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private workspace",
    "materials": "Calendar; paper",
    "frequency": "Weekly",
    "prompt": "What needs a conversation rather than more self-pressure?",
    "steps": [
      {
        "minutes": 3,
        "text": "Look at one commitment that exceeds your present capacity."
      },
      {
        "minutes": 3,
        "text": "Separate the essential outcome from optional detail or timing."
      },
      {
        "minutes": 4,
        "text": "Draft a request to change scope, sequence, timing or support while acknowledging who is affected."
      },
      {
        "minutes": 3,
        "text": "Choose an appropriate person and communication channel. Ask rather than assume agreement."
      },
      {
        "minutes": 2,
        "text": "Record the next conversation and keep the existing commitment visible until a change is agreed."
      }
    ],
    "carry": "Follow up on the request and document any agreed change.",
    "care": "This is not permission to abandon critical duties or ignore a safety requirement.",
    "adapt": "Rehearse the request with a trusted colleague or supporter.",
    "segmentSlug": "self-love",
    "need": "Nourishment",
    "slug": "permission-to-renegotiate",
    "modeDetail": "Self-guided",
    "immediate": [
      "A clearer view of one commitment that needs adjustment",
      "A respectful request to rehearse"
    ],
    "continuing": [
      "More practice discussing capacity before overcommitting",
      "A habit of following through on agreed changes"
    ],
    "image": "/images/ritual-r38.webp"
  },
  {
    "id": "R39",
    "name": "Thought and Observation",
    "segment": "Working with negative thoughts",
    "purpose": "Distinguish an everyday interpretation from what you directly know.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private place",
    "materials": "Paper",
    "frequency": "Occasionally for a manageable concern",
    "prompt": "What do I know, and what am I adding?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose a mild everyday worry and write it in one sentence."
      },
      {
        "minutes": 3,
        "text": "Write what you directly observed separately from what you are assuming or predicting."
      },
      {
        "minutes": 3,
        "text": "Ask what information is missing and whether a different explanation is plausible."
      },
      {
        "minutes": 2,
        "text": "Write a balanced sentence that allows uncertainty rather than forcing a positive conclusion."
      },
      {
        "minutes": 2,
        "text": "Choose one practical action, such as clarifying a request, and return attention to your surroundings."
      }
    ],
    "carry": "Use one clarifying action instead of repeatedly debating the thought.",
    "care": "This is not CBT treatment; persistent distress or disturbing experiences need qualified support.",
    "adapt": "Skip writing the worry and focus only on a practical clarification you can seek.",
    "segmentSlug": "thoughts",
    "need": "Calm",
    "slug": "thought-and-observation",
    "modeDetail": "Self-guided education",
    "immediate": [
      "A distinction between an interpretation and known information",
      "One practical clarification you can seek"
    ],
    "continuing": [
      "More practice approaching manageable concerns with curiosity",
      "A repeatable cue to choose action instead of prolonged debate"
    ],
    "image": "/images/ritual-r39.webp"
  },
  {
    "id": "R40",
    "name": "A Reply That Helps Me Act",
    "segment": "Working with negative thoughts",
    "purpose": "Choose supportive language for an ordinary setback.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home or office",
    "materials": "Paper optional",
    "frequency": "After a manageable setback",
    "prompt": "What would help me respond constructively now?",
    "steps": [
      {
        "minutes": 2,
        "text": "Name the setback factually, without a label about your whole character."
      },
      {
        "minutes": 2,
        "text": "Notice the first self-critical sentence and ask whether it helps you act."
      },
      {
        "minutes": 3,
        "text": "Write a reply that is fair and specific: this was difficult; here is the part I can address."
      },
      {
        "minutes": 2,
        "text": "Identify one repair, request or learning action within your influence."
      },
      {
        "minutes": 1,
        "text": "Begin the action or schedule it; you do not need to win an argument with your thoughts."
      }
    ],
    "carry": "Use the practical reply once; avoid compulsory repetition.",
    "care": "Stop if the exercise increases rumination; seek support for ongoing distress.",
    "adapt": "Say the sentence quietly, draw a reminder or ask for practical help.",
    "segmentSlug": "thoughts",
    "need": "Calm",
    "slug": "a-reply-that-helps-me-act",
    "modeDetail": "Self-guided education",
    "immediate": [
      "A supportive reply to an ordinary setback",
      "One small next step within your control"
    ],
    "continuing": [
      "A more practical response when similar setbacks occur",
      "More flexibility in the language you use with yourself"
    ],
    "image": "/images/ritual-r40.webp"
  },
  {
    "id": "R41",
    "name": "Mindful First Bite",
    "segment": "The Thoughtful Table",
    "purpose": "Give brief attention to an ordinary meal without changing the food or your care plan.",
    "minutes": 5,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "At a normal meal",
    "materials": "Your usual suitable food",
    "frequency": "At a meal when convenient",
    "prompt": "What makes this meal easier to enjoy?",
    "steps": [
      {
        "minutes": 1,
        "text": "Sit or position yourself as you normally do safely. Follow any eating or swallowing guidance you have."
      },
      {
        "minutes": 1,
        "text": "Notice a colour, aroma or texture without needing to like it."
      },
      {
        "minutes": 1,
        "text": "Take your usual comfortable bite and eat normally; no special chewing count is needed."
      },
      {
        "minutes": 1,
        "text": "Notice whether your setting allows a comfortable pace and whether anything practical would help."
      },
      {
        "minutes": 1,
        "text": "Continue your meal. The ritual ends without requiring the whole meal to be silent."
      }
    ],
    "carry": "Protect one small part of a meal from avoidable interruption.",
    "care": "No fasting, food challenges or changes to a prescribed diet; never delay required intake.",
    "adapt": "If sensory focus is unpleasant, notice the table setting instead.",
    "segmentSlug": "the-thoughtful-table",
    "need": "Nourishment",
    "slug": "mindful-first-bite",
    "modeDetail": "Self-guided",
    "immediate": [
      "A brief moment of attention within your usual meal",
      "An observation about taste, texture or the setting"
    ],
    "continuing": [
      "A small habit of protecting a meal from avoidable interruption",
      "More awareness of what makes eating comfortable for you"
    ],
    "image": "/images/ritual-r41.webp"
  },
  {
    "id": "R42",
    "name": "The Shared Table Invitation",
    "segment": "The Thoughtful Table",
    "purpose": "Create an inclusive meal conversation with clear choices.",
    "minutes": 15,
    "mode": "Supported practice",
    "audience": "Adult groups; families with support",
    "setting": "Office lunch area or home",
    "materials": "Usual meal; no special menu required",
    "frequency": "Occasionally",
    "prompt": "What helps everyone feel welcome at this table?",
    "steps": [
      {
        "minutes": 3,
        "text": "Check practical needs and let people choose food, seating and whether to join the conversation."
      },
      {
        "minutes": 3,
        "text": "Offer one neutral prompt, such as a small thing that made the day easier."
      },
      {
        "minutes": 4,
        "text": "Invite brief turns while others eat at their normal pace. Passing is welcome."
      },
      {
        "minutes": 3,
        "text": "Ask what would make future shared meals more comfortable or accessible."
      },
      {
        "minutes": 2,
        "text": "Close with thanks and let people continue or leave without explanation."
      }
    ],
    "carry": "Make one practical improvement to the next shared meal.",
    "care": "Do not comment on portions, bodies, weight, medical needs or food morality.",
    "adapt": "Use a drink-free conversation if eating together is inaccessible or unsuitable.",
    "segmentSlug": "the-thoughtful-table",
    "need": "Nourishment",
    "slug": "the-shared-table-invitation",
    "modeDetail": "Supported practice",
    "immediate": [
      "A clear invitation with room to decline",
      "A considerate way to begin a shared meal conversation"
    ],
    "continuing": [
      "More inclusive habits around shared meals",
      "A practical approach to asking about preferences without judging food"
    ],
    "image": "/images/ritual-r42.webp"
  },
  {
    "id": "R43",
    "name": "Listening to the Room",
    "segment": "Sound and silence",
    "purpose": "Notice ordinary sounds without needing special equipment.",
    "minutes": 8,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Safe seated place",
    "materials": "None",
    "frequency": "Two or three times weekly if pleasant",
    "prompt": "Was listening useful, neutral or unhelpful today?",
    "steps": [
      {
        "minutes": 1,
        "text": "Choose a place where you do not need to monitor safety-critical signals."
      },
      {
        "minutes": 2,
        "text": "With eyes open, notice a nearby sound and a more distant one without trying to identify every source."
      },
      {
        "minutes": 2,
        "text": "Allow sounds to come and go; if the exercise is unpleasant, look at a stable object instead."
      },
      {
        "minutes": 2,
        "text": "Notice one ordinary detail in the room and decide whether you would like to continue or finish."
      },
      {
        "minutes": 1,
        "text": "Turn attention back to your surroundings and your next activity."
      }
    ],
    "carry": "Choose quiet or sound according to your preference, without claiming a better method.",
    "care": "Stop if sounds increase discomfort, ringing, fear or sensory overload.",
    "adapt": "Use a visual observation practice if sound is inaccessible or unpleasant.",
    "segmentSlug": "sound-and-silence",
    "need": "Calm",
    "slug": "listening-to-the-room",
    "modeDetail": "Self-guided",
    "immediate": [
      "An observation of ordinary sounds around you",
      "A chance to choose whether listening feels comfortable"
    ],
    "continuing": [
      "More confidence choosing sound, quiet or a visual alternative",
      "A simple attention practice that does not depend on equipment"
    ],
    "image": "/images/ritual-r43.webp"
  },
  {
    "id": "R44",
    "name": "A Guided Sound Pause",
    "segment": "Sound and silence",
    "purpose": "Offer a brief sensory pause at a comfortable, agreed volume.",
    "minutes": 20,
    "mode": "Facilitator-led",
    "audience": "Opt-in adult group up to 8",
    "setting": "Quiet room with easy exit",
    "materials": "Optional soft sound instrument; chairs",
    "frequency": "Occasional event",
    "prompt": "Would I choose sound, silence or neither next time?",
    "steps": [
      {
        "minutes": 4,
        "text": "Explain that this is a listening experience, ask about access preferences and offer silence or leaving as equal options."
      },
      {
        "minutes": 4,
        "text": "Demonstrate a brief soft sound from a distance. Check comfort before continuing; never place instruments on bodies."
      },
      {
        "minutes": 5,
        "text": "Alternate short sounds with quiet at a level comfortable to participants; stop on request."
      },
      {
        "minutes": 4,
        "text": "End the sound, invite eyes-open orientation and allow people to adjust or leave quietly."
      },
      {
        "minutes": 3,
        "text": "Ask only about comfort and preference, not visions, diagnoses or supposed energy changes."
      }
    ],
    "carry": "Keep any future listening brief and comfortable.",
    "care": "No therapeutic frequency, healing or disease claims; adapt for hearing differences and sensory sensitivity.",
    "adapt": "A fully silent visual pause can replace the complete experience.",
    "segmentSlug": "sound-and-silence",
    "need": "Calm",
    "slug": "a-guided-sound-pause",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "A sensory pause with agreed volume and an exit option",
      "A clearer sense of your listening preferences"
    ],
    "continuing": [
      "More informed choices about future sound experiences",
      "A habit of communicating sensory and access needs"
    ],
    "image": "/images/ritual-r44.webp"
  },
  {
    "id": "R45",
    "name": "A Light and an Intention",
    "segment": "Prakash",
    "purpose": "Use a symbolic light to mark one practical next step.",
    "minutes": 15,
    "mode": "Supported practice",
    "audience": "Adults; families with age-appropriate support",
    "setting": "Home or office",
    "materials": "LED light; paper",
    "frequency": "At a chosen celebration or transition",
    "prompt": "What deserves a little more attention in my next week?",
    "steps": [
      {
        "minutes": 3,
        "text": "Explain the symbolism and offer a secular beginning-again theme; participation is optional."
      },
      {
        "minutes": 3,
        "text": "Switch on an LED light or choose a printed image. No open flame is required."
      },
      {
        "minutes": 4,
        "text": "Write one thing you want to give attention to and one practical action within a week."
      },
      {
        "minutes": 3,
        "text": "Invite optional sharing of the action, without prayer or public pledges being required."
      },
      {
        "minutes": 2,
        "text": "Place the card somewhere useful and switch off or put away the light safely."
      }
    ],
    "carry": "Use the card as a reminder, not a promise of good fortune.",
    "care": "Use LEDs in workplaces and around children; no incense, flames or obligatory religious practice.",
    "adapt": "Use a plain intention card with no festival symbolism.",
    "segmentSlug": "prakash",
    "need": "Direction",
    "slug": "a-light-and-an-intention",
    "modeDetail": "Supported practice",
    "immediate": [
      "One intention connected to a practical next step",
      "A card or symbolic light to mark that choice"
    ],
    "continuing": [
      "A reminder to give attention to the action you chose",
      "A personal way to mark transitions without compulsory belief or sharing"
    ],
    "image": "/images/ritual-r45.webp"
  },
  {
    "id": "R46",
    "name": "An Exchange of Appreciation",
    "segment": "Prakash",
    "purpose": "Celebrate a contribution with specific, non-comparative thanks.",
    "minutes": 20,
    "mode": "Facilitator-led",
    "audience": "Adult groups of 4 to 8",
    "setting": "Office or community room",
    "materials": "Cards; pens",
    "frequency": "At celebrations or quarterly",
    "prompt": "Which contribution made our shared work easier?",
    "steps": [
      {
        "minutes": 3,
        "text": "Explain that appreciation is optional and should refer to observed actions, not appearance or status."
      },
      {
        "minutes": 5,
        "text": "Each person writes a specific thank you to a willing recipient or privately acknowledges support."
      },
      {
        "minutes": 5,
        "text": "Invite voluntary sharing while avoiding a popularity contest or expectation of reciprocal praise."
      },
      {
        "minutes": 4,
        "text": "Discuss one helpful group practice worth continuing after the celebration."
      },
      {
        "minutes": 3,
        "text": "Collect only the agreed team action; cards stay with their writers or chosen recipients."
      }
    ],
    "carry": "Continue the useful group practice after the event.",
    "care": "Do not use peer praise as an appraisal, ranking or substitute for addressing unfair treatment.",
    "adapt": "Offer a shared-resource thank you so nobody has to select an individual.",
    "segmentSlug": "prakash",
    "need": "Direction",
    "slug": "an-exchange-of-appreciation",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "Specific thanks for an observed contribution",
      "One helpful group practice to continue"
    ],
    "continuing": [
      "More thoughtful appreciation beyond a celebration",
      "A shared habit of recognising useful actions without ranking people"
    ],
    "image": "/images/ritual-r46.webp"
  },
  {
    "id": "R47",
    "name": "Colour Without Contact",
    "segment": "Rang",
    "purpose": "Create shared art without touching people or throwing colour.",
    "minutes": 25,
    "mode": "Facilitator-led",
    "audience": "Adult groups; families with supervision",
    "setting": "Accessible table space",
    "materials": "Paper; non-toxic pens or pencils",
    "frequency": "Seasonal gathering or team event",
    "prompt": "What can we create while respecting each person’s space?",
    "steps": [
      {
        "minutes": 4,
        "text": "Explain the creative task and agree that people and belongings will not be marked or touched."
      },
      {
        "minutes": 5,
        "text": "Each participant chooses colours or words to represent something they want to bring to the group."
      },
      {
        "minutes": 8,
        "text": "Add marks to a shared paper with agreed space for everyone. Passing or observing is welcome."
      },
      {
        "minutes": 5,
        "text": "Invite participants to describe their own contribution; others do not interpret it psychologically."
      },
      {
        "minutes": 3,
        "text": "Decide together whether to keep, display or recycle the artwork, with consent for any photograph."
      }
    ],
    "carry": "Bring the same consent and turn-taking into the next shared activity.",
    "care": "No powders, skin application, forced contact or assumptions about colours and personality.",
    "adapt": "Use words, textured safe materials or spoken contributions as needed.",
    "segmentSlug": "rang",
    "need": "Connection",
    "slug": "colour-without-contact",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "A shared creative activity with clear consent",
      "A way to contribute without contact or colour powders"
    ],
    "continuing": [
      "More practice respecting preferences in group activities",
      "A repeatable approach to inclusive, cooperative creativity"
    ],
    "image": "/images/ritual-r47.webp"
  },
  {
    "id": "R48",
    "name": "A Kindness Exchange",
    "segment": "Rang",
    "purpose": "Offer practical goodwill without making public promises or assigning emotional labour.",
    "minutes": 18,
    "mode": "Facilitator-led",
    "audience": "Adult groups up to 8",
    "setting": "Meeting or community room",
    "materials": "Paper optional",
    "frequency": "Occasionally",
    "prompt": "Will this act be useful to the other person?",
    "steps": [
      {
        "minutes": 3,
        "text": "Define kindness as a freely chosen, feasible act that respects the recipient’s preference."
      },
      {
        "minutes": 4,
        "text": "Invite examples such as sharing information, making access easier or offering a short practical task."
      },
      {
        "minutes": 5,
        "text": "Each person chooses an act and identifies how to check that help is welcome."
      },
      {
        "minutes": 4,
        "text": "Agree a reasonable limit and timing; no money, gifts or personal contact details are required."
      },
      {
        "minutes": 2,
        "text": "Close with permission to change the plan if circumstances or consent change."
      }
    ],
    "carry": "Ask before helping and keep the action within your capacity.",
    "care": "Avoid uninvited personal advice, contact or commitments that create pressure.",
    "adapt": "Choose a practical improvement to a shared space rather than a person-directed action.",
    "segmentSlug": "rang",
    "need": "Connection",
    "slug": "a-kindness-exchange",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "One small act of goodwill within your capacity",
      "A chance to ask whether help is welcome"
    ],
    "continuing": [
      "More considered habits of offering practical support",
      "A clearer boundary between kindness and unwanted obligation"
    ],
    "image": "/images/ritual-r48.webp"
  },
  {
    "id": "R49",
    "name": "A Monthly Reflection",
    "segment": "Purnima",
    "purpose": "Review the past month and choose what to carry forward.",
    "minutes": 20,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Home or quiet space",
    "materials": "Notebook",
    "frequency": "Monthly on any convenient date",
    "prompt": "What deserves to continue, and what can change gently?",
    "steps": [
      {
        "minutes": 3,
        "text": "Choose a review date; a full moon may be a cultural marker, not a requirement."
      },
      {
        "minutes": 5,
        "text": "Write one thing that mattered, one difficulty and one source of support during the month."
      },
      {
        "minutes": 5,
        "text": "Notice a routine you want to continue and one you would like to adapt."
      },
      {
        "minutes": 5,
        "text": "Choose a small action for the next week rather than a complete monthly overhaul."
      },
      {
        "minutes": 2,
        "text": "Close the notebook and reconnect with your surroundings."
      }
    ],
    "carry": "Review the action in a week; use any date that fits your life.",
    "care": "No claim is made that moon phases regulate health, mood or life events.",
    "adapt": "Use a calendar reminder with no moon imagery.",
    "segmentSlug": "purnima",
    "need": "Direction",
    "slug": "a-monthly-reflection",
    "modeDetail": "Self-guided",
    "immediate": [
      "A concise view of the month you have lived",
      "One choice about what to carry forward"
    ],
    "continuing": [
      "A flexible monthly review on dates that suit you",
      "More deliberate attention to the patterns you want to keep or change"
    ],
    "image": "/images/ritual-r49.webp"
  },
  {
    "id": "R50",
    "name": "A Shared Quiet Reflection",
    "segment": "Purnima",
    "purpose": "Offer a short period of personal reflection without compulsory sharing.",
    "minutes": 18,
    "mode": "Facilitator-led",
    "audience": "Adult groups up to 8",
    "setting": "Quiet accessible room",
    "materials": "Paper; optional neutral image",
    "frequency": "Monthly or at transitions",
    "prompt": "What is one manageable intention I can choose?",
    "steps": [
      {
        "minutes": 3,
        "text": "Explain the time boundaries, passing option and a neutral reflection prompt."
      },
      {
        "minutes": 4,
        "text": "Invite eyes-open attention to the room or a simple image, with normal breathing."
      },
      {
        "minutes": 5,
        "text": "Offer private writing on what each person wants to continue or change; no reading aloud is required."
      },
      {
        "minutes": 4,
        "text": "Invite one optional practical intention, while avoiding comments on others’ writing."
      },
      {
        "minutes": 2,
        "text": "Orient to the room and finish with a clear next activity."
      }
    ],
    "carry": "Keep your writing private and revisit only if useful.",
    "care": "Stop or move to ordinary conversation if quiet reflection feels uncomfortable.",
    "adapt": "Replace silence with quiet drawing or supported communication.",
    "segmentSlug": "purnima",
    "need": "Direction",
    "slug": "a-shared-quiet-reflection",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "Time for private reflection with room to opt out",
      "A choice about what, if anything, to share"
    ],
    "continuing": [
      "More familiarity with reflecting without public disclosure",
      "A flexible way to mark a transition with other people"
    ],
    "image": "/images/ritual-r50.webp"
  },
  {
    "id": "R51",
    "name": "My Three Practice Taster",
    "segment": "Swthastu Wellbeing Festival",
    "purpose": "Sample three short activities and choose what suits you.",
    "minutes": 24,
    "mode": "Facilitator-led",
    "audience": "Adult event participants",
    "setting": "Accessible event room",
    "materials": "Paper; seating; visible schedule",
    "frequency": "At a wellbeing event",
    "prompt": "Which practice would I choose again, and which would I leave?",
    "steps": [
      {
        "minutes": 4,
        "text": "Explain three options: visual noticing, private intention writing and an everyday listening prompt. Participants may choose only one."
      },
      {
        "minutes": 5,
        "text": "Guide a short visual observation of ordinary room details, keeping eyes open."
      },
      {
        "minutes": 5,
        "text": "Offer private writing of one manageable intention, with drawing as an alternative."
      },
      {
        "minutes": 5,
        "text": "Invite optional paired listening on a neutral topic, with observation instead of pairing allowed."
      },
      {
        "minutes": 5,
        "text": "Ask which activity felt suitable and offer the matching full ritual for another day."
      }
    ],
    "carry": "Practise one selected self-guided ritual rather than collecting more techniques.",
    "care": "No physiological testing, wellbeing rankings or forced movement at taster stations.",
    "adapt": "Provide a seated, quiet route and written instructions for the whole activity.",
    "segmentSlug": "swthastu-wellbeing-festival",
    "need": "Connection",
    "slug": "my-three-practice-taster",
    "modeDetail": "Facilitator-led",
    "immediate": [
      "A direct experience of three accessible practice options",
      "A clearer preference about what you may want to explore"
    ],
    "continuing": [
      "More informed choices about your next self-guided practice",
      "A habit of choosing what fits rather than collecting techniques"
    ],
    "image": "/images/ritual-r51.webp"
  },
  {
    "id": "R52",
    "name": "The Practice Choice Card",
    "segment": "Swthastu Wellbeing Festival",
    "purpose": "Turn an event experience into a clear and voluntary next step.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Event exit area or home",
    "materials": "Small card; pen",
    "frequency": "After a taster or workshop",
    "prompt": "What would I actually like to try once more?",
    "steps": [
      {
        "minutes": 2,
        "text": "Recall one activity that was manageable or interesting, even if no activity felt calming."
      },
      {
        "minutes": 3,
        "text": "Write its name, the shortest useful version and a safe place to try it."
      },
      {
        "minutes": 3,
        "text": "Choose one day, a start cue and any support or materials needed."
      },
      {
        "minutes": 2,
        "text": "Write how you will know whether to continue: usefulness and comfort rather than a streak."
      },
      {
        "minutes": 2,
        "text": "Keep the card; enrolling in a service or sharing contact details is optional."
      }
    ],
    "carry": "Use the card one time and decide freely whether to repeat.",
    "care": "A festival experience is not a health assessment or a reason to purchase treatment.",
    "adapt": "Ask the facilitator to write the card while you choose its contents.",
    "segmentSlug": "swthastu-wellbeing-festival",
    "need": "Connection",
    "slug": "the-practice-choice-card",
    "modeDetail": "Self-guided or supported",
    "immediate": [
      "One voluntary next step after a workshop or taster",
      "Clarity about the support a chosen practice needs"
    ],
    "continuing": [
      "A simple reference for trying and reviewing a practice",
      "More confidence declining experiences that do not suit you"
    ],
    "image": "/images/ritual-r52.webp"
  },
  {
    "id": "R53",
    "name": "One Honest Sankalpa",
    "segment": "Sankalpa and gratitude",
    "purpose": "Form an achievable intention without an absolute promise.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Quiet place",
    "materials": "Paper",
    "frequency": "At the start of a week or transition",
    "prompt": "What intention can I practise rather than merely declare?",
    "steps": [
      {
        "minutes": 2,
        "text": "Choose an area you can influence: attention, listening, rest or an ordinary responsibility."
      },
      {
        "minutes": 3,
        "text": "Write the smallest action that would express care or responsibility in that area."
      },
      {
        "minutes": 3,
        "text": "Link it to a cue: after this event, I will try this action for this amount of time."
      },
      {
        "minutes": 2,
        "text": "Add a fallback for difficult days and identify any support needed."
      },
      {
        "minutes": 2,
        "text": "Read it once, keep it accessible and release the need for a perfect streak."
      }
    ],
    "carry": "Review after seven days and keep, reduce or change it.",
    "care": "Sankalpa here means a chosen intention; it does not guarantee an outcome.",
    "adapt": "Use neutral language such as weekly intention if Sanskrit terminology does not suit you.",
    "segmentSlug": "sankalpa-and-gratitude",
    "need": "Direction",
    "slug": "one-honest-sankalpa",
    "modeDetail": "Self-guided",
    "immediate": [
      "An achievable intention for the coming week",
      "A practical action with room to revise it"
    ],
    "continuing": [
      "A habit of choosing intentions that fit real life",
      "More flexibility when reviewing what to keep, reduce or change"
    ],
    "image": "/images/ritual-r53.webp"
  },
  {
    "id": "R54",
    "name": "Letter to Tomorrow",
    "segment": "Sankalpa and gratitude",
    "purpose": "Leave a kind, practical instruction for your next day.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "At the end of a day",
    "materials": "Paper or private note",
    "frequency": "When useful, up to three times weekly",
    "prompt": "What would make tomorrow’s beginning less demanding?",
    "steps": [
      {
        "minutes": 2,
        "text": "Note what remains unfinished without trying to resolve it all now."
      },
      {
        "minutes": 2,
        "text": "Choose one priority that is reasonable for tomorrow’s actual circumstances."
      },
      {
        "minutes": 3,
        "text": "Write a brief note describing the first step, necessary support and one way to be fair to yourself."
      },
      {
        "minutes": 2,
        "text": "Place the note where it will be found without exposing private information."
      },
      {
        "minutes": 1,
        "text": "Close the day’s task and move into an ordinary evening activity."
      }
    ],
    "carry": "Use the note as a starting point and revise it if circumstances change.",
    "care": "Do not use the note to extend working time indefinitely or add more obligations.",
    "adapt": "Record a short private audio message or a single-line reminder.",
    "segmentSlug": "sankalpa-and-gratitude",
    "need": "Direction",
    "slug": "letter-to-tomorrow",
    "modeDetail": "Self-guided",
    "immediate": [
      "A kind, clear starting cue for tomorrow",
      "A chance to set down one next step today"
    ],
    "continuing": [
      "A practical link between planning and beginning",
      "More experience keeping reminders useful without adding obligations"
    ],
    "image": "/images/ritual-r54.webp"
  },
  {
    "id": "R55",
    "name": "The Seven Day Bridge",
    "segment": "Beyond the retreat",
    "purpose": "Translate one chosen insight into a realistic home or work experiment.",
    "minutes": 18,
    "mode": "Self-guided",
    "audience": "Adult programme alumni",
    "setting": "After a programme, at home or work",
    "materials": "Notes; calendar",
    "frequency": "Once after a programme, then review weekly",
    "prompt": "What can travel with me into an ordinary day?",
    "steps": [
      {
        "minutes": 3,
        "text": "Choose one insight you want to explore; do not try to recreate the entire programme."
      },
      {
        "minutes": 4,
        "text": "Define a small action that fits your normal surroundings and resources."
      },
      {
        "minutes": 4,
        "text": "Identify a start cue, a shorter fallback and one likely obstacle."
      },
      {
        "minutes": 4,
        "text": "Schedule one or two attempts during the next seven days and decide how to record usefulness."
      },
      {
        "minutes": 3,
        "text": "Choose a review date and permission to stop or adapt the practice."
      }
    ],
    "carry": "Review whether the practice fits your routine, not whether you felt like you did at the retreat.",
    "care": "Do not carry home treatments, diets or practices that need supervision without appropriate guidance.",
    "adapt": "Use the simplest seated or written version of the chosen practice.",
    "segmentSlug": "beyond-the-retreat",
    "need": "Direction",
    "slug": "the-seven-day-bridge",
    "modeDetail": "Self-guided",
    "immediate": [
      "One experience translated into a manageable home or work practice",
      "A realistic plan for a seven-day experiment"
    ],
    "continuing": [
      "A flexible bridge from a programme into everyday life",
      "More clarity about which practices fit outside a retreat setting"
    ],
    "image": "/images/ritual-r55.webp"
  },
  {
    "id": "R56",
    "name": "My Weekly Continuation Review",
    "segment": "Beyond the retreat",
    "purpose": "Make continuation flexible rather than relying on perfect adherence.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Quiet place",
    "materials": "Practice notes",
    "frequency": "Weekly",
    "prompt": "What fits my life now?",
    "steps": [
      {
        "minutes": 3,
        "text": "Look back at the attempts you made, including any days when the practice was not possible."
      },
      {
        "minutes": 3,
        "text": "Write what was useful, neutral or uncomfortable without scoring your discipline."
      },
      {
        "minutes": 4,
        "text": "Identify one practical barrier and one possible change in timing, duration or support."
      },
      {
        "minutes": 3,
        "text": "Choose to continue, adapt, pause or replace the practice."
      },
      {
        "minutes": 2,
        "text": "Record the next review point or close the experiment with no further commitment."
      }
    ],
    "carry": "Repeat only a practice you choose and can use safely.",
    "care": "Continuing is not always better; stop practices that cause distress or discomfort.",
    "adapt": "Review verbally with a trusted supporter while keeping private details private.",
    "segmentSlug": "beyond-the-retreat",
    "need": "Direction",
    "slug": "my-weekly-continuation-review",
    "modeDetail": "Self-guided",
    "immediate": [
      "A choice to keep, adapt, pause or stop",
      "A realistic plan that does not require perfect adherence"
    ],
    "continuing": [
      "A review rhythm based on usefulness and comfort",
      "More confidence changing a practice as your circumstances change"
    ],
    "image": "/images/ritual-r56.webp"
  },
  {
    "id": "R57",
    "name": "Meeting Arrival in Five Minutes",
    "segment": "Swthastu at Work",
    "purpose": "Begin a meeting with purpose and participation choices.",
    "minutes": 5,
    "mode": "Facilitator-led",
    "audience": "Adult workplace teams",
    "setting": "Meeting room or online",
    "materials": "Agenda",
    "frequency": "For selected meetings, with team agreement",
    "prompt": "What do we need from this time together?",
    "steps": [
      {
        "minutes": 1,
        "text": "State the meeting purpose and invite people to settle in their normal seated position."
      },
      {
        "minutes": 1,
        "text": "Offer a silent look at the agenda or a brief eyes-open pause. Neither requires personal disclosure."
      },
      {
        "minutes": 1,
        "text": "Ask participants to identify the decision or question most relevant to them."
      },
      {
        "minutes": 1,
        "text": "Clarify time limits, access needs and whether any agenda item needs adjustment."
      },
      {
        "minutes": 1,
        "text": "Begin the first task and keep the meeting within its agreed boundary."
      }
    ],
    "carry": "Close the meeting with clear actions instead of adding another ritual.",
    "care": "Do not mandate meditation, spiritual language or health check-ins at work.",
    "adapt": "Use a written agenda review for teams who prefer no pause practice.",
    "segmentSlug": "at-work",
    "need": "Energy",
    "slug": "meeting-arrival-in-five-minutes",
    "modeDetail": "Trained manager or facilitator-led",
    "immediate": [
      "A shared meeting purpose and participation choices",
      "A clear way to begin with the work in view"
    ],
    "continuing": [
      "A more consistent habit of purposeful meeting openings",
      "Better-defined agreements about how a team participates"
    ],
    "image": "/images/ritual-r57.webp"
  },
  {
    "id": "R58",
    "name": "Our Team Focus Agreement",
    "segment": "Swthastu at Work",
    "purpose": "Agree one practical change to interruptions that respects the work.",
    "minutes": 25,
    "mode": "Facilitator-led",
    "audience": "Adult teams up to 8",
    "setting": "Office or online",
    "materials": "Shared action document",
    "frequency": "Monthly review",
    "prompt": "Which interruption is avoidable, and which is necessary?",
    "steps": [
      {
        "minutes": 4,
        "text": "Describe the interruption problem with process examples rather than naming and blaming individuals."
      },
      {
        "minutes": 6,
        "text": "Identify essential contact channels, urgent exceptions and customer or safety obligations."
      },
      {
        "minutes": 7,
        "text": "Choose one small experiment: shorter meetings, clearer response windows or one protected work period."
      },
      {
        "minutes": 5,
        "text": "Assign an owner, start date and way to request an exception without penalty."
      },
      {
        "minutes": 3,
        "text": "Set a two-week review and decide what evidence will show whether the agreement is useful."
      }
    ],
    "carry": "Review the process rather than tracking individual concentration.",
    "care": "Keep essential alerts, accessibility tools and escalation channels available.",
    "adapt": "Use asynchronous written input for shifts, remote teams and different communication needs.",
    "segmentSlug": "at-work",
    "need": "Energy",
    "slug": "our-team-focus-agreement",
    "modeDetail": "Trained manager or facilitator-led",
    "immediate": [
      "One agreed adjustment to interruptions",
      "Clarity about essential alerts and escalation routes"
    ],
    "continuing": [
      "A repeatable review of the team's working process",
      "More explicit support for different shifts and communication needs"
    ],
    "image": "/images/ritual-r58.webp"
  },
  {
    "id": "R59",
    "name": "Before a Support Conversation",
    "segment": "Human support and coaching",
    "purpose": "Clarify what you want from a booked coach or qualified practitioner.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private setting",
    "materials": "Paper",
    "frequency": "Before an appointment",
    "prompt": "What kind of support am I seeking, and is this person qualified to provide it?",
    "steps": [
      {
        "minutes": 2,
        "text": "Write the issue you want to discuss in one or two present-focused sentences."
      },
      {
        "minutes": 3,
        "text": "Describe what would make the conversation useful: being heard, understanding options or choosing an action."
      },
      {
        "minutes": 3,
        "text": "Prepare questions about the person’s credentials, scope, confidentiality, fees and cancellation terms."
      },
      {
        "minutes": 2,
        "text": "Note what you do not wish to discuss and any communication or access needs."
      },
      {
        "minutes": 2,
        "text": "Bring only the information you choose, recognising that clinical care may need relevant health history."
      }
    ],
    "carry": "Confirm fit before committing to ongoing sessions.",
    "care": "Coaching is not a substitute for clinical assessment or crisis support.",
    "adapt": "Use a written agenda or bring a trusted person with your consent.",
    "segmentSlug": "human-support-and-coaching",
    "need": "Connection",
    "slug": "before-a-support-conversation",
    "modeDetail": "Self-guided preparation",
    "immediate": [
      "A concise agenda for a support conversation",
      "Questions about fit, scope and the response you want"
    ],
    "continuing": [
      "More active choices about ongoing support",
      "A habit of clarifying professional boundaries before committing"
    ],
    "image": "/images/ritual-r59.webp"
  },
  {
    "id": "R60",
    "name": "After the Conversation",
    "segment": "Human support and coaching",
    "purpose": "Choose what to carry forward and what needs clarification.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private place after an appointment",
    "materials": "Private notes",
    "frequency": "After a support appointment",
    "prompt": "What have I actually agreed to, and what remains a question?",
    "steps": [
      {
        "minutes": 3,
        "text": "Write what you understood from the conversation in your own words."
      },
      {
        "minutes": 3,
        "text": "Separate an agreed action from an idea you have not chosen or consented to."
      },
      {
        "minutes": 4,
        "text": "Choose one feasible next step and identify any professional clarification needed first."
      },
      {
        "minutes": 3,
        "text": "Record when you will review progress and how you can contact the provider appropriately."
      },
      {
        "minutes": 2,
        "text": "Store notes privately and return to an ordinary activity without needing to feel transformed."
      }
    ],
    "carry": "Seek clarification rather than guessing about important advice.",
    "care": "Do not change medicines, treatment or clinical recommendations based on this workbook.",
    "adapt": "Use a brief private audio note if writing is tiring or inaccessible.",
    "segmentSlug": "human-support-and-coaching",
    "need": "Connection",
    "slug": "after-the-conversation",
    "modeDetail": "Self-guided",
    "immediate": [
      "A record of what you understood and chose to carry forward",
      "Questions that still need clarification"
    ],
    "continuing": [
      "A practical follow-through habit after appointments",
      "More confidence checking important advice rather than guessing"
    ],
    "image": "/images/ritual-r60.webp"
  },
  {
    "id": "R61",
    "name": "My Private Three Line Journal",
    "segment": "My Space and daily journal",
    "purpose": "Create a short record without making it a compulsory daily task.",
    "minutes": 8,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Private place",
    "materials": "Paper or a private tool you understand",
    "frequency": "When useful; no daily requirement",
    "prompt": "What is worth recording, and what would I prefer to leave unwritten?",
    "steps": [
      {
        "minutes": 1,
        "text": "Choose where to write and check who can access it, including shared devices or cloud accounts."
      },
      {
        "minutes": 2,
        "text": "Write one line about what happened today using only the detail you want to keep."
      },
      {
        "minutes": 2,
        "text": "Write one line about what mattered or what you noticed."
      },
      {
        "minutes": 2,
        "text": "Write one line about a manageable next step, or choose to leave the page without an action."
      },
      {
        "minutes": 1,
        "text": "Store, delete or close the entry according to your preference. Do not share by default."
      }
    ],
    "carry": "Review only if useful; a journal is not a performance record.",
    "care": "Do not assume a digital tool is private or clinically monitored; check its current terms and settings.",
    "adapt": "Use paper, symbols or a private voice note rather than a connected service.",
    "segmentSlug": "my-space-and-daily-journal",
    "need": "Calm",
    "slug": "my-private-three-line-journal",
    "modeDetail": "Self-guided",
    "immediate": [
      "A short private record in a format you choose",
      "Room to notice one moment without a daily obligation"
    ],
    "continuing": [
      "A flexible reflection habit that stays under your control",
      "More awareness of what is useful to record and what can remain unwritten"
    ],
    "image": "/images/ritual-r61.webp"
  },
  {
    "id": "R62",
    "name": "Choose Before I Share",
    "segment": "My Space and daily journal",
    "purpose": "Decide whether a reflection belongs in a conversation or should remain private.",
    "minutes": 10,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "Before sharing a journal entry",
    "materials": "Chosen reflection; no platform required",
    "frequency": "Whenever considering sharing",
    "prompt": "What do I want this person to understand, and how much is enough?",
    "steps": [
      {
        "minutes": 2,
        "text": "Read the entry and ask why you want to share: support, practical help or simple connection."
      },
      {
        "minutes": 2,
        "text": "Remove details about other people that you do not have permission to disclose."
      },
      {
        "minutes": 3,
        "text": "Choose the smallest excerpt needed and a suitable recipient and channel."
      },
      {
        "minutes": 2,
        "text": "Check whether the recipient is willing to receive it and whether any privacy limits matter."
      },
      {
        "minutes": 1,
        "text": "Share only if you still want to, or keep the entry private without explanation."
      }
    ],
    "carry": "Request the kind of response you want, such as listening or practical ideas.",
    "care": "Never assume workplace systems or AI services offer confidential clinical support.",
    "adapt": "Summarise the issue without sending the original journal entry.",
    "segmentSlug": "my-space-and-daily-journal",
    "need": "Calm",
    "slug": "choose-before-i-share",
    "modeDetail": "Self-guided",
    "immediate": [
      "A deliberate choice about whether to share",
      "A smaller, relevant summary if you choose a conversation"
    ],
    "continuing": [
      "More consistent boundaries around personal reflections",
      "A habit of checking privacy, purpose and the response you want"
    ],
    "image": "/images/ritual-r62.webp"
  },
  {
    "id": "R63",
    "name": "Close the Working Day",
    "segment": "Evening rest and transitions",
    "purpose": "Leave a clear next step so the working day has an ending.",
    "minutes": 12,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "At the end of work",
    "materials": "Task list; calendar",
    "frequency": "At the end of a working day",
    "prompt": "What can wait because I have left a clear next step?",
    "steps": [
      {
        "minutes": 2,
        "text": "Check for genuine urgent responsibilities and agree any essential handover."
      },
      {
        "minutes": 3,
        "text": "Write the next step for unfinished work and where necessary information can be found."
      },
      {
        "minutes": 3,
        "text": "Choose tomorrow’s first manageable task and identify anything that needs clarification."
      },
      {
        "minutes": 2,
        "text": "Close work tools where your role permits and adjust notifications in line with agreed duties."
      },
      {
        "minutes": 2,
        "text": "Move into an ordinary non-work activity or a short seated pause."
      }
    ],
    "carry": "Repeat the handover and next-step habit rather than extending planning into the evening.",
    "care": "Respect on-call obligations; if after-hours demands are unsustainable, seek a work-practice discussion.",
    "adapt": "Use a paper handover or voice note if closing screens is not possible.",
    "segmentSlug": "evening-rest-and-transitions",
    "need": "Calm",
    "slug": "close-the-working-day",
    "modeDetail": "Self-guided",
    "immediate": [
      "A written next step or handover before you stop",
      "A clear cue that work is finished for now"
    ],
    "continuing": [
      "A more deliberate transition out of the working day",
      "A repeatable way to handle unfinished tasks within real work obligations"
    ],
    "image": "/images/ritual-r63.webp"
  },
  {
    "id": "R64",
    "name": "An Evening Unwind Choice",
    "segment": "Evening rest and transitions",
    "purpose": "Choose a comfortable transition into rest without forcing relaxation.",
    "minutes": 15,
    "mode": "Self-guided",
    "audience": "Adults",
    "setting": "A familiar safe place",
    "materials": "Optional book, paper or quiet activity",
    "frequency": "In the evening when useful",
    "prompt": "What helps me change pace without another demand?",
    "steps": [
      {
        "minutes": 3,
        "text": "Notice which ordinary activity feels manageable: light reading, quiet sitting or preparing for tomorrow."
      },
      {
        "minutes": 3,
        "text": "Make one small environmental adjustment such as a comfortable seat or fewer non-essential alerts."
      },
      {
        "minutes": 5,
        "text": "Spend a few minutes on the chosen activity with normal breathing and eyes open if preferred."
      },
      {
        "minutes": 2,
        "text": "Ask whether the activity is useful or whether you would rather stop or change it."
      },
      {
        "minutes": 2,
        "text": "Continue with your usual evening and any existing care plan, without checking whether you achieved calm."
      }
    ],
    "carry": "Keep the part that fits your evening and leave the rest.",
    "care": "This is not insomnia treatment; persistent sleep difficulties or marked daytime sleepiness need qualified advice.",
    "adapt": "Use a neutral practical task if stillness or sensory attention is uncomfortable.",
    "segmentSlug": "evening-rest-and-transitions",
    "need": "Calm",
    "slug": "an-evening-unwind-choice",
    "modeDetail": "Self-guided",
    "immediate": [
      "One comfortable option for a change of pace",
      "Permission to choose a practical alternative to stillness"
    ],
    "continuing": [
      "A flexible evening routine based on what suits you",
      "More confidence keeping only the parts that remain useful"
    ],
    "image": "/images/ritual-r64.webp"
  }
];

export function ritualBySlug(slug: string) {
  return rituals.find((ritual) => ritual.slug === slug);
}
