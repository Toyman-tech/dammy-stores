"use client"

import { motion } from "framer-motion"
import { X, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const problems = [
  {
    title: "Traditional mops just push dirt around",
    description: "Old-fashioned string mops spread bacteria and leave streaks",
  },
  {
    title: "Heavy buckets and messy water changes",
    description: "Constantly refilling dirty water is time-consuming and unhygienic",
  },
  {
    title: "Can't reach tight corners and spaces",
    description: "Rigid mop heads miss crucial cleaning areas in your home",
  },
  {
    title: "Leaves floors wet and streaky",
    description: "Poor absorption leads to long drying times and water spots",
  },
]

const solutions = [
  {
    title: "Advanced microfiber technology",
    description: "Captures 99.9% of dirt, dust, and bacteria in one pass",
  },
  {
    title: "Built-in spray system",
    description: "Clean water on-demand with no heavy buckets required",
  },
  {
    title: "360° rotating head",
    description: "Reaches every corner, under furniture, and tight spaces",
  },
  {
    title: "Superior absorption",
    description: "Leaves floors completely dry and streak-free instantly",
  },
]

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-muted/30" id="problem-solution">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Why Traditional Mops
            <span className="text-destructive"> Fail</span> You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stop struggling with outdated cleaning methods. Here's how our CleanPro Mop solves every problem you face
            with traditional mops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-destructive mb-8 flex items-center gap-3">
              <X className="h-6 w-6" />
              The Problems You Face
            </h3>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-destructive/5 border border-destructive/20 rounded-lg p-6"
              >
                <h4 className="font-semibold text-lg mb-2 text-destructive">{problem.title}</h4>
                <p className="text-muted-foreground">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Check className="h-6 w-6" />
              Our Smart Solutions
            </h3>

            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-6"
              >
                <h4 className="font-semibold text-lg mb-2 text-primary">{solution.title}</h4>
                <p className="text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link target="blank" href={"https://wa.me/+2347048667548"}>
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <span className="text-lg font-semibold">Ready to upgrade your cleaning?</span>
            <ArrowRight className="h-5 w-5 text-primary" />
          </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
