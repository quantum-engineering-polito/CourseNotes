---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# Thermodynamic entropy

## Formulas and definitions

- **Thermodynamic parameters**: measurable macroscopic quantities associated with the system (pressure, volume, temperature, etc).
- **Thermodynamic state**: is specified by a set of values of all the thermodynamic parameters necessary to describe the system.
- **Thermodynamic equilibrium**: condition when the thermodynamic state does not change in time.
- **Equation of state**: is a function of the thermodynamic parameters for a system in equilibrium and defines a surface $f(P, V, T) = 0$.
- **P-V diagram**: projection of the surface of the equation of state onto the P-V plane
- **Work**: $dW = P ~dV$
- **Heat**: $\Delta Q = C ~ \Delta T$ where $C$ is the **heat capacity**.

## I law of thermodynamics

Considering an arbitrary thermodynamic transformation with $\Delta Q$ the heat **absorbed** by the system and $\Delta W$ the work **done** by the system, the difference in internal energy will be given by: 

$$
\Delta U = \Delta Q - \Delta W
$$

which can be written in differential form as 

$$
dU = dQ - dW
$$

## II law of thermodynamics

The second law of thermodynamics can be expressed in two equivalent forms:

- **Kelvin statement**: There exists no thermodynamic transformation whose sole effect is to extract a quantity of heat from a given heat reservoir and to convert it entirely into work.
- **Clausius statement**: There exists no thermodynamic transformation whose sole effect is to extract a quantity of heat from a colder reservoir and to deliver it to a hotter reservoir.

## Carnot engine

#todo 

## Entropy definition

The entropy between two states $\mathbf{0}$ (state with $T = 0K$) and a generic state $A$ is given by:

$$
S(A) = \int_{\mathbf{0}}^{A} \frac{dQ}{T}
$$

We are usually interested in the **difference in entropy** of two states, which is defined as 

$$
S(A) - S(B) \geq \int_{A}^{B} \frac{dQ}{T} \tag{1}
$$

where the path of integration is any reversible path joining $B$ to $A$.

The $=$ in $(1)$ holds for the case of **reversible transformations**.

# Shannon entropy

>[!info] This part is heavily based on the Shannon's masterpiece "*A mathematical theory of communication*"

We can start the analysis of the concept of entropy in the Information field by studying a **discrete information source** that generates a message, symbol by symbol.

A physical system, or a mathematical model of a system which produces such a sequence of symbols governed by a set of probabilities, is known as a **stochastic (random) process**. Examples of these systems can be a natural language, a source of information, etc.

We can start introducing the concepts that will be useful later in a simple case where we have only five letters 

$$
A,B,C,D,E
$$
which each have probability $p(i)$ of being chosen (this is called **letter frequency**). Let's suppose for now that the probabilities are all equal: 

$$
p_{i} = 0.2
$$

We will also restrict our analysis to the case of independent choices (the probabilities of a letter is not influenced by the previous letters).

Forming a message with these rules leads to something similar to 

$$
B D C B C E C C C A D C B D D A A E C E E A
$$

We can slightly increase the complexity analysing a case where the probabilities (letter frequencies) are not the same. For example 

$$
P(A) = 0.4, P(B) = 0.1, P(C ) = 0.2, P(D) = 0.2, P(E ) = 0.1
$$

A possible message in this case could be 

$$
A A A C D C B D C E A A D A D A C E D A
$$

To further complicate the structure of our system we can introduce the concept of **transition probability** $p_{i}(j)$, which indicate the probability that letter $i$ is followed by letter $j$. This is the same as specifying the **digram probability** $p(i,j)$, which indicates the probability to obtain the digram $ij$.

The following properties hold for the probabilities we just saw:

$$
\displaylines{
p(i)=\sum_{j}p(i,j)=\sum_{j}p(j,i)
=\sum_{j}p(j)p_{j}(i) \\
p(i,j) = p(i) p_{i}(j) \\\\
\sum_{j}{p_{i}(j)}=\sum_{i}{p(i)}=\sum_{i,j}{p(i,j)}=\mathrm{1}
}
$$

We could theoretically add probabilities for trigrams and so on.

The more constraints we add, the more we approach a real language (see the paper for more examples).

At this point we would like to find a way to measure "how much information is produced". Such measure, let's call it $H(p_1, p_2, \dots, p_n)$, should have the following properties:

1) Should be continuous in the $p_{i}$.
2) If all the $p_{i}$ are equal, it should be a monotonic increasing function of $n$. This means that with equally likely events we will have more uncertainty as we increase the number of events.
3) If a choice is broken down into two successive choices, the original $H$ should be the weighted sum of the individual values of $H$. The meaning of this statement is explained in the image below.

![[decomposition of choices.png|400]]

## Theorem

The only $H$ that satisfies the three above assumptions is of the form 

$$
H = -K \sum_{i=1}^{n} p_{i} \log p_{i}
$$

where $K$ is a positive constant.

### Demonstration

#todo

---

## Example

In the simple case of two possibilities with probabilities $p$ and $q = 1 - p$, the entropy would be 

$$
H = - (p \log p + q \log q)
$$
From the plot of $H$ below we can see that when the output is know (blue dots), the entropy is zero, which is to say that we have no **surprise** in the outcome. On the other hand, when $p = 1 /2$, the entropy is equal to $1$, which means that we **don't know what to expect**.

![[entropy example.svg|500]]

## Properties

From the example above we already noticed some interesting properties of the quantity $H$, which are also valid in general:

1) $H = 0$ if and only if all the $p_{i} = 0$ except one of them, which has value $1$.
2) For a given $n$, $H$ has a maximum equal to $\log n$ when all the $p_{i}$ are equal.
3) Suppose there are two events, $x$ and $y$, with $m$ possibilities for the first and $n$ for the second. Let $p(i,j)$ be probability of the join occurrence of $i$ for the first and $j$ for the second. The entropy of the **join event** is: 

$$
H(x,y) = - \sum_{i,j} p(i,j) \log p(i,j) \tag{Joint Entropy}
$$

while 

$$
\displaylines{
H(x) = - \sum_{i,j} p(i,j) \log \sum_{{\color{red} j} } p(i,j)\\
H(y) = - \sum_{i,j} p(i,j) \log \sum_{{\color{red} i} } p(i,j)
}
$$

It can be shown that 

$$
H(x,y) \leq H(x) + H(y)
$$

where the equality holds if the events are independent ($p(i,j) = p(i)p(j)$).

4) Any change toward equalization of the probabilities $p_1, p_2, \dots, p_{n}$ increases $H$. This can be easily derived from property 2.
5) If we have two events $x$ and $y$ like in property 3, not necessarily independent. For any particular value $i$ that $x$ can assume, there is a **conditional probability** $p_{i}(j)$ that $y$ has the value $j$: 

$$
p_{i}(j) = \frac{p(i,j)}{\sum_{j} p(i,j)} \tag{Conditional Probability}
$$

We can also define the **conditional entropy** of $y$, $H_{x}(y)$ as the average of the entropy of $y$ for each value of $x$, weighted according to the probability of getting that particular $x$: 

$$
H_{x}(y) = - \sum_{i,j} p(i,j) \log p_{i}(j) \tag{Conditional Entropy}
$$

This quantity measures how uncertain we are of $y$ on average when we know $x$. Substituting the value of $p_{i}(j)$ we obtain the following relation: 

$$
\displaylines{
\begin{align}
H_{x}(y) &= -\sum_{i,j} p(i,j)\log p(i,j) + \sum_{i,j} p(i,j) \log \sum_{j} p(i,j) \\
&= H(x,y) - H(x)
\end{align}\\\\
\Downarrow \\\\
H(x,y) = H(x) + H_{x}(y)\\
\text{Joint entropy} = \text{Entropy of } x + \text{Conditional entropy of } y \text{ when } x \text{ is known}

}
$$


### Entropy measurement units

The choice of the logarithmic base corresponds to the choice of a measurement unit. The most common ones are the following:

- $\log_2$: bits
- $\log_{e}$: nats
- $\log_{10}$: dits or hartleys
- $\log_{256}$: bytes

