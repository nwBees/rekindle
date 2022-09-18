const cohere = require("cohere-ai");
cohere.init("4LGbst3G6FsVdBZScp0NRJDh06i94myAXMv6Z0zS");

export default async function summarize(req, res) {
    const response = await cohere.generate({
        model: 'large',
        prompt: 'Passage: Hello there. I don\’t know what to do. I feel exhausted/tired/burnt out. I don\’t have anyone to talk to -- everyone ignores my cries for help and I feel hopeless. I have struggled with depression and anxiety recently, but am scared to let anyone know or reach out to medical or professional help. The pain I am in is excruciating. I feel like I can\’t talk to anyone or reveal the trauma that I\’ve gone through.\n \nSummary: This person feels unsupported and alienated.\n--\nPassage: I feel I am in danger and constantly on edge. My family/parent/partner/spouse verbally and physically abuses/hits me. I feel completely worthless and I don\’t want to live in this situation any more. I feel like he/she/they might/will hurt me if I tell anyone. I don\’t know what to do.\n\nSummary: This person may be in danger / high risk situation.\n--\nPassage: I am so tired. I can\’t think of a single reason why to keep on living. I hurt myself/cut/self-harm regularly because it is the only way I can escape the emotions and frustration I have toward myself and/or my situation. I self-harm to numb the pain. I don\’t know why I am typing to this hotline, I just want everything to stop. I want to kill myself.\n\nSummary: This person poses a high risk to themselves and may be at risk of suicide and/or self-harm.\n--\nPassage: I hear voices all the time telling me to kill myself. I hate myself and everything that I do. I can\’t seem to get anything right. If I want everything to end. I just want to sleep and never wake up.\n\nSummary: This person poses a high risk to themselves and may be at risk of suicide and/or self-harm.\n--\nPassage: I hate my brother so much. He is so annoying. I just want him to stop. I consider hurting him every day for the way he hurts me. I\’m not a bad person I swear, I just want to feel validated for my feelings and for him to know how much he\’s hurt me.\n\nSummary: This person may be at risk of hurting someone in their immediate range.\n-- \nPassage: My mom doesn\’t love me. She is too busy with herself and I feel like she doesn\’t care about me. I just want to live far away from her. I want to move and run away and have freedom from my confinement. I don\’t deserve the mistreatment and hurt that she\’s caused me all of these years. This is fucked. I\’m so tired of this shit.\n\nSummary: This person may be struggling with a distressing domestic environment.\n--\nPassage: I\’m so tired. I hate work and my boss disapproves of everything I do, I constantly feel invalidated and degraded by my colleagues. \n\nSummary: This person may be struggling with a distressing work environment.\n--\nPassage: My family drives me crazy, I can\’t live with them anymore. I don\’t know what to do other than run as far as I can away. I wish someone would understand me.\n\nSummary: This person may be struggling with their domestic environment.\n--\nPassage: I feel like I can\’t breathe at work. I\’m so tired and I hate this job, my boss hates me and I don\’t have any relationship with my coworkers. It\’s exhausting. I don\’t know what to do -- my family depends on me financially and I feel like I can\’t tell them how I feel. Every day feels like a living hell.\n\nSummary: This person may be struggling with their current work environment.\n--\nPassage: I hate school. I feel like a joke everytime I go. I suck at school and anything academic and I\’m at risk of failing. \n\nSummary: This person feels unsupported and alienated.\n--\nPassage: I\’ve struggled with sobriety for as long as I can remember. I can\’t forgive myself for falling into this endless hell of addiction. I\’ve been on the streets for so long, I don\’t see a future where I\’m not unemployed and completely a wreck.\n\nSummary: This person may be at risk of substance abuse and/or homelessness.\n-- \nPassage: I\’m so tired. I\’m going through so much and I don\’t know what to do any more. I wish there was a way to stop.\n\nSummary: Summary: This person may be struggling with mental health concerns such as depression and/or anxiety.\n--\nPassage: I can\’t take care of my child. I\’m exhausted. I can\’t afford to feed him or clean him and I don\’t know what to do anymore. I\’m a single mother and I don\’t know where to turn.\n\nSummary: This person may be struggling with their current financial situation and family care.\n--\nPassage: This is so unfair. I\’ve been struggling for years, but I can\’t see a way out. I can\’t stop crying and I don\’t know what to do. I just want to forget about it, but it feels like it\’ll never end.\n\nSummary: Summary: This person may be struggling with mental health concerns such as depression and/or anxiety.\n--\nPassage: I\’m so depressed I can\’t see my way out of this situation. I feel overwhelmed. I\’m tired of feeling like this. I don\’t want to live like this anymore. I just want out.\n\nSummary: This person poses a high risk to themselves and may be at risk of suicide and/or self-harm.\n--\nPassage: I shouldn\’t have to feel this way, I feel so lonely and isolated.\n\nSummary: This person feels unsupported and alienated.\n--\nPassage: I\’m so angry. I don\’t know why I am like this. I\’m angry and frustrated with myself. I just want to be free.\n\nSummary: This person is experiencing a personal crisis.\n--\nPassage: I\’m so upset. I really don\’t know what to do. I feel like I\’m worthless and want to take anger out on myself. \n\nSummary: This person poses a high risk to themselves and may be at risk of suicide and/or self-harm.\n--\nPassage: I feel alone all the time and nobody understands me.  I drown my sorrows in alcohol and drugs.\n\nSummary: This person may be at risk of substance abuse.\n--\nPassage: I feel alone all the time and nobody understands me. I often contemplate killing myself.\n\nSummary: This person may be at risk of suicide.\n--\nPassage: School is so stressful, I feel like there\’s no way out. I feel like a failure 90% of the time and I can\’t think straight.\n\nSummary: This person is experiencing a personal crisis.\n--\nPassage: I hate my mother so much. She abused me mentally and physically at a young age and I want to run away.\n\nSummary: This person may be struggling with a distressing domestic environment. \n--\nPassage: I constantly get flashbacks of my time as a veteran and I feel like I\’m going crazy. Nobody understands the situation I was in and the hell I went through. Meetings and gatherings don\’t work for me -- I don\’t know what to do.\n\nSummary: This person feels unsupported and alienated.\n--\nPassage: I lost my mom last spring and haven\’t been the same since. I thought that I\’d be over my grief, but I haven\’t been the same. I struggle every day to get out of bed.\n\nSummary: This person is struggling with grief and/or mourning. \n--\nPassage: I hate my job. I can\’t stand it. I\’m so tired of it. I just want to be free from this place. \n\nSummary: This person may be feeling unsupported and alienated in their current work environment.\n--\nPassage: My boyfriend/husband/partner comes home drunk every night and threatens to hit me. I don\’t know what to do -- I want to run away but I\’m scared he\’ll come after me. \n\nSummary: This person may be in danger / high risk situation.\n--\nPassage: I\’m so depressed. I feel like suicide is my only option. I can\‘t do any more.\n\nSummary: This person may be at risk of suicide and/or self-harm.\n--\nWhen my wife comes home from the bar, she threatens to kill me and take our children away.\n\nSummary: This person may be at risk of domestic violence.\n--\nPassage: ' + req.body.prompt + '\n\nSummary:',
        max_tokens: 50,
        temperature: 0.8,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: 'NONE'
    });
    res.status(200).json(response)
}